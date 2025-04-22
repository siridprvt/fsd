// path

const path = require('path');

const filePath = '/home/user/documents/file.txt';

console.log('Join Paths:', path.join('/home', 'user', 'documents', 'file.txt'));
console.log('Resolve Path:', path.resolve('documents', 'file.txt'));
console.log('Base Name:', path.basename(filePath));
console.log('Directory Name:', path.dirname(filePath));
console.log('File Extension:', path.extname(filePath));