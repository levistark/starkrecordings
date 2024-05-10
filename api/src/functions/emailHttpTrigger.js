const { app, output } = require('@azure/functions');

const serviceBusOutput = output.serviceBusQueue({
    queueName: 'email-optin',
    connection: 'ServiceBus',
});

app.http('emailHttpTrigger', {
    methods: ['POST'],
    authLevel: 'anonymous',
    output: serviceBusOutput,
    return: serviceBusOutput,
    handler: async (request, context) => {
        const email = await request.text()

        if (email !== "" && email !== null) {
            return email
        }
    }
}); 