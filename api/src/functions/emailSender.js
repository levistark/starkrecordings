const { app } = require('@azure/functions');
const { EmailClient, KnownEmailSendStatus } = require("@azure/communication-email");

/*
            
    Denna Function lyssnar på 'email-optin'-kön i från Azure Service Bus, och hämtar
    meddelanden från denna kö.

    Den ska sedan skicka iväg en request via sendEmail() till Azure Communication Service
    som i sin tur skickar iväg ett välkomstmejl till användaren
                
*/

// Initializing function binding to queue
app.serviceBusQueue('emailSender', {
    connection: 'AzureServiceBus',
    queueName: 'email-optin',
    handler: async (message, context) => {
        try {   
            const result = await sendEmail(message)

            if (result.status === 204) 
                return { status: 204}
            else 
                return { status: 409}
            
        } catch {
            return { status: 500};
        }
    }
});

// Sending an email via Azure Communication
async function sendEmail(optInEmail) {
    const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];
    const client = new EmailClient(connectionString);
    const POLLER_WAIT_TIME = 10;

    try {
        const emailMessage = {
            senderAddress: "DoNotReply@f6816a07-7596-4495-bb8f-c1dc84945132.azurecomm.net",
            content: {
                subject: "New email opt-in",
                plainText: `${optInEmail} subscribed to your 'Are you a songwriter?' form`,
            },
            recipients: {
                to: [{ address: "levi@starkrecordings.com" }],
            },
        };

        const poller = await client.beginSend(emailMessage);

        if (!poller.getOperationState().isStarted) {
            throw "Poller was not started."
        }

        let timeElapsed = 0;
        
        while(!poller.isDone()) {
            poller.poll();
            console.log("Email send polling in progress");

            await new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
            timeElapsed += 10;

            if(timeElapsed > 18 * POLLER_WAIT_TIME) {
                throw "Polling timed out.";
            }
        }

        if(poller.getResult().status === KnownEmailSendStatus.Succeeded) {
            console.log(`Successfully sent the email (operation id: ${poller.getResult().id})`);
            return { status: 204}
        }
        else {
            throw poller.getResult().error;
        }

    } catch (e) {
        console.log(e)
        return { status: 500}
    }
}

