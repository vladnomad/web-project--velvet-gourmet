
require('dotenv').config();
// const http = require('http');
const express = require('express');
const app = express();
const port = parseInt(process.env.PORT, 10) || 4242;

console.log(port);

/* http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write(`Server is running at port ${port}`);
    response.end();
}).listen(port); */

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile('public' + "/index.html")
});
