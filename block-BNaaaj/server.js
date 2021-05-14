let url = require('url');

let parsedUrl = url.parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit'
);

console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);

let parsedQuery = url.parse(parsedUrl.query);

console.log(parsedQuery);
