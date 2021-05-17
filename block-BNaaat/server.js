let http = require('http');
let fs = require('fs');

let server = http.createServer(handleServer);
function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('server is started at port 5555');
});
