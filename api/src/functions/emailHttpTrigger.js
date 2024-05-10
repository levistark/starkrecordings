const { app } = require('@azure/functions');
//const { ServiceBusClient } = require("@azure/service-bus");

app.http('emailHttpTrigger', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return;

        const email = await request.text()
        
        // if (email !== "" && email !== null) {
        //     const sbConnectionString = process.env['AzureServiceBus']
        //     const sbClient = new ServiceBusClient(sbConnectionString);
        //     const queueName = 'email-optin'
        //     const sender = sbClient.createSender(queueName);
        //     const message = { body: email }

        //     try {
        //         await sender.sendMessages(message);
        //         await sender.close();
        //     } catch (error) {
        //         console.error(`An error occurred: ${error.message}`);
        //     } finally {
        //         await sbClient.close();
        //     }
        // }
    }
});
