
require('dotenv').config();
const http = require('http');

const port = parseInt(process.env.PORT, 10) || 4242;

console.log(port);

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write(`Server is running at port ${port}`);

    const express = require('express');
    const app = express();
    app.use(express.static('public'));

    response.end();

}).listen(port);