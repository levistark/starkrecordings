const { app } = require('@azure/functions');

app.http('message', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const email = request.body

        if (email !== "" && email !== null) {
            try {
                // Sending email to Azure Service Bus

                return { status: 200, body: email};
            } catch {
                
                return { status: 500};
            }
        }
        return { status: 405};
    }
});
