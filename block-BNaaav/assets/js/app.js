let http = require('http');
let fs = require('fs');

let server = http.createServer(handleServer);
server.listen(3000, () => {
  console.log('server is started on 3000');
});
function handleServer(req, res) {
  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('../../index.html').pipe(res);
  } else if (req.url === '/about' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('../../about.html').pipe(res);
  } else if (req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile('../stylesheets/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.url.split('.').pop() === 'jpg') {
    // set header for css file
    res.setHeader('Content-Type', 'image');
    // read css file and send it in response
    fs.readFile('../media/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.url.split('.').pop() === 'js') {
    // set header for css file
    res.setHeader('Content-Type', 'text/plain');
    // read css file and send it in response
    fs.readFile('../js/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}
