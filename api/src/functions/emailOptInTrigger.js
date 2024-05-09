const { app } = require('@azure/functions');
const { ServiceBusClient } = require("@azure/service-bus");

app.http('emailOptInTrigger', {
    methods: ['POST'],
    authLevel: 'function',
    handler: async (request, context) => {
        const email = await request.text()

        if (email !== "" && email !== null) {
            const sbConnectionString = process.env['AzureServiceBus']
            const sbClient = new ServiceBusClient(sbConnectionString);
            const queueName = 'email-optin'
            const sender = sbClient.createSender(queueName);
            const message = { body: email }

            try {
                await sender.sendMessages(message);
                console.log(`Sent messages to the queue: ${queueName} with the body: ${message}`);
                await sender.close();

            } catch (error) {
                console.error(`An error occurred: ${error.message}`);
                
            } finally {
                await sbClient.close();
            }
        }
    }
});