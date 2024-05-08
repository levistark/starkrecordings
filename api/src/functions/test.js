const { app } = require('@azure/functions');

app.http('test', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = await request.text();

    }
});
