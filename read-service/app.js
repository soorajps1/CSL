// read-service/app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

app.get('/read', (req, res) => {
    // Handle read logic
    res.json({ message: 'Reading resources' });
});

app.listen(port, () => {
    console.log(`Read Microservice listening at http://localhost:${port}`);
});
