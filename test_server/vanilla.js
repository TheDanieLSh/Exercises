const http = require('http');

const SERVER = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This will be in browser');
})

SERVER.listen(3000, 'localhost', (error) => {
    error ? console.log(error) : console.log('This will be in terminal');
})