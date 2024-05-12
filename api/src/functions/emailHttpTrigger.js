const { app, output } = require('@azure/functions');

const sbOutput = output.serviceBusQueue({
    queueName: 'email-optin',
    connection: 'ServiceBus',
});

app.http('emailHttpTrigger', {
    methods: ['POST'],
    authLevel: 'anonymous',
    return: sbOutput,
    handler: async (request, context) => {
        const email = await request.text()
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) 
            return email
    }
}); 