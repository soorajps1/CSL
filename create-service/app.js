const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/create', (req, res) => {
    // Handle creation logic
    res.json({ message: 'Resource created successfully' });
});

app.listen(port, () => {
    console.log(`Create Microservice listening at http://localhost:${port}`);
});