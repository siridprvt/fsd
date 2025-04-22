// express server

const express = require('express');
const path = require('path');

const app = express();

// Serve HTML content
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // Serving the HTML file
});

// Serve plain text response
app.get('/text', (req, res) => {
    res.type('text/plain');
    res.send('This is a plain text response.');
});

// Serve JSON response
app.get('/json', (req, res) => {
    const responseObject = { message: 'This is a JSON response', status: 'success' };
    res.json(responseObject);
});

// Serve a different HTML file (Optional)
app.get('/about', (req, res) => {
    const aboutHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About Page</title>
    </head>
    <body>
      <h1>About Us</h1>
      <p>We are a fictional company!</p>
    </body>
    </html>
  `;
    res.send(aboutHTML);
});

// Handle 404 for undefined routes
app.use((req, res) => {
    res.status(404).send('Resource not found');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});