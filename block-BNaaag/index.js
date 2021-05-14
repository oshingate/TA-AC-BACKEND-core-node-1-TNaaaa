var fs = require('fs');
// fs.readFile('./index.md', (err, content) => {
//   console.log(content.toString());
// });

let abc = Buffer.alloc(10);
console.log(abc);
abc.write('Dasdasdasdsadadsasdasdasdsad');
console.log(abc);
console.log(abc.toString());
