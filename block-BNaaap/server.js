const http = require('http');

function handleserver(req, res) {
  res.statusCode = 201;
  res.setHeader('content-type', 'text/html');
  res.end('<h2>Welcome</h2>');
}

let server = http.createServer(handleserver);

server.listen(4444, () => {
  console.log('server is started');
});
