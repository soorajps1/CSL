const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const port = 3000;

const proxy = httpProxy.createProxyServer();

// Define routes for CRUD operations
app.post('/create', (req, res) => {
    proxy.web(req, res, { target: 'http://create-service:3001' });
});

app.get('/read', (req, res) => {
    proxy.web(req, res, { target: 'http://read-service:3002' });
});

app.put('/update', (req, res) => {
    proxy.web(req, res, { target: 'http://update-service:3003' });
});

app.delete('/delete', (req, res) => {
    proxy.web(req, res, { target: 'http://delete-service:3004' });
});

app.listen(port, () => {
    console.log(`API Gateway listening at http://localhost:${port}`);
});
