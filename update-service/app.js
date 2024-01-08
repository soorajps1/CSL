// update-service/app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

app.use(bodyParser.json());

app.put('/update', (req, res) => {
    // Handle update logic
    res.json({ message: 'Resource updated successfully' });
});

app.listen(port, () => {
    console.log(`Update Microservice listening at http://localhost:${port}`);
});
