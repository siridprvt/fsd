// create files/directories

const fs = require('fs');

// --- 1. Create a directory ---
fs.mkdir('exampleDir', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory "exampleDir" created successfully!');
    }
});

// --- 2. Create a text file ---
fs.writeFile('example.txt', 'Hello, this is a simple text file!', (err) => {
    if (err) {
        console.error('Error creating text file:', err);
    } else {
        console.log('Text file "example.txt" created successfully!');
    }
});

// --- 3. Create a JSON file ---
const jsonData = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
};

fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
        console.error('Error creating JSON file:', err);
    } else {
        console.log('JSON file "data.json" created successfully!');
    }
});

// --- 4. Create an HTML file ---
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Page</title>
</head>
<body>
  <h1>Hello, welcome to my page!</h1>
  <p>This is a sample HTML file created using Node.js.</p>
</body>
</html>
`;

fs.writeFile('index.html', htmlContent, (err) => {
    if (err) {
        console.error('Error creating HTML file:', err);
    } else {
        console.log('HTML file "index.html" created successfully!');
    }
});