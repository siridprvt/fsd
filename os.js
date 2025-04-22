// OS

const os = require('os');

console.log('Operating System Platform:', os.platform());
console.log('CPU Info:', os.cpus());
console.log('Total Memory:', os.totalmem(), 'bytes');
console.log('Free Memory:', os.freemem(), 'bytes');
console.log('Hostname:', os.hostname());
console.log('System Uptime:', os.uptime(), 'seconds');