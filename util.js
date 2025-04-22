// util
const util = require('util');

// Using util.format
const formattedString = util.format('Hello %s, you are %d years old.', 'Alice', 25);
console.log(formattedString);

// Using util.inspect
const obj = { name: 'Alice', age: 25 };
console.log(util.inspect(obj, { showHidden: false, depth: null }));

// Using util.promisify
const fs = require('fs');
const readFilePromise = util.promisify(fs.readFile);

readFilePromise('example.txt', 'utf8')
    .then(data => console.log('File content:', data))
    .catch(err => console.error('Error reading file:', err));