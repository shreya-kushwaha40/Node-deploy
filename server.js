const express = require('express');
const app = express();
const swaggerDocs = require('./src/config/swagger');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const port = process.env.PORT || 9090;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/orders', require('./src/routes/orders'));
app.use('/reviews', require('./src/routes/reviews'));

app.listen(3000, () => console.log(`Server is running at port http://localhost:${port}`));