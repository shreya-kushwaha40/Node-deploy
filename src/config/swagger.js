const swaggerJsDocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition:{
        openapi: '3.0.0',
        info: {
          title: 'Online Bookstore API',
          version: '1.0.0',
          description: 'API documentation for the Online Bookstore',
        },
        servers: [{url: 'http://localhost:3000'}],
    },
    apis: ['./routes/*.js'],
}

const swaggerDocs = swaggerJsDocs(swaggerOptions);
module.exports = swaggerDocs;