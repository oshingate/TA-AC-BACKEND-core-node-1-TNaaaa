console.log('Welcome to Nodejs');
let os = require('os');
let fs = require('fs');

console.log(os.cpus().length, os.freemem(), os.uptime(), os.version());
fs.readFile('./index.md', (rej, res) => {
  console.log(res.toString());
});
