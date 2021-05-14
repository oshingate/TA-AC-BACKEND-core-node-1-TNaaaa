let http = require('http');

function handleServer(req, res) {
  console.log(req.headers);
  console.log(req.method, req.url);
  res.end('welcome');
}

let server = http.Server(handleServer);
server.listen(3000, () => {
  console.log('server Started');
});
