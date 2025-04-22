// http server

const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the HTTP server
const server = http.createServer((req, res) => {
    const { method, url } = req;

    // Set the default response headers
    res.setHeader('Content-Type', 'text/html');

    // Handle requests for different resources
    if (method === 'GET') {
        if (url === '/') {
            // Provide an HTML response
            res.setHeader('Content-Type', 'text/html');
            fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                } else {
                    res.statusCode = 200;
                    res.end(data);
                }
            });
        } else if (url === '/text') {
            // Provide a plain text response
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 200;
            res.end('This is a plain text response.');
        } else if (url === '/json') {
            // Provide a JSON response
            res.setHeader('Content-Type', 'application/json');
            const responseObject = { message: 'This is a JSON response', status: 'success' };
            res.statusCode = 200;
            res.end(JSON.stringify(responseObject));
        } else {
            // Handle 404 not found
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Resource not found');
        }
    } else {
        // Method Not Allowed
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Method Not Allowed');
    }
});

// The server listens on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});