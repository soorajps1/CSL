// delete-service/app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3004;

app.use(bodyParser.json());

app.delete('/delete', (req, res) => {
    // Handle delete logic
    res.json({ message: 'Resource deleted successfully' });
});

app.listen(port, () => {
    console.log(`Delete Microservice listening at http://localhost:${port}`);
});