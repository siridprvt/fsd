// readable writable streams

const fs = require('fs');

// --- 1. Create a readable stream from a file ---
const readableStream = fs.createReadStream('input.txt', 'utf8');

// --- 2. Create a writable stream to another file ---
const writableStream = fs.createWriteStream('output.txt', 'utf8');

// --- 3. Read data from the input file and write it to the output file ---
readableStream.on('data', (chunk) => {
    console.log('Reading chunk:', chunk);  // Log the chunk of data being read
    writableStream.write(chunk);           // Write the chunk of data to the output file
});

// --- 4. Handle end of the readable stream ---
readableStream.on('end', () => {
    console.log('Reading is complete');
    writableStream.end();  // End the writable stream after reading is complete
});

// --- 5. Handle errors in the readable and writable streams ---
readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
    console.error('Error writing to file:', err);
});