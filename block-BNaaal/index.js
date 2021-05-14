let http = require('http');

function handleServer(req, res) {
  res.end('welcome');
}
let server = http.createServer(handleServer);
server.listen(3000);
