let http = require('http');
let url = require('url');

let server = http.createServer(handleServer);
// function handleServer(req, res) {
//   console.log(req);
//   console.log(res);
//   res.end('Hello');
// }
// server.listen(5000, () => {
//   console.log('server is started on 5000 port');
// });

// ====================================================2============================

// function handleServer(req, res) {
//   res.end('My first server in NodeJS');
// }
// server.listen(5100, () => {
//   console.log('server is started on 5000 port');
// });

// ===========================================3=======================================
// function handleServer(req, res) {
//   console.log(req.headers);
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(req.headers['user-agent']);
// }
// server.listen(5555, () => {
//   console.log('server is started on 5000 port');
// });

// ===========================================4=======================================
// function handleServer(req, res) {
//   console.log(req.url, req.method);
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(`url is "${req.url} and method is "${req.method}"`);
// }
// server.listen(5566, () => {
//   console.log('server is started on 5000 port');
// });

// ===========================================4=======================================
// function handleServer(req, res) {
//   let content = req.headers;
//   console.log(content);
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(content.toString());
// }
// server.listen(7000, () => {
//   console.log('server listening on port 7000');
// });

// ===========================================5=======================================
// function handleServer(req, res) {
//   res.statusCode = 202;

//   res.end(`${res.statusCode}`);
// }
// server.listen(3333, () => {
//   console.log('server listening on port 3333');
// });

// ===========================================6=======================================
// function handleServer(req, res) {
//   res.statusCode = 202;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<h3>Welcome to altcampus</h3>`);
// }
// server.listen(8000, () => {
//   console.log('server listening on port 8000');
// });

// ===========================================7=======================================
// function handleServer(req, res) {
//   //   res.statusCode = 202;
//   //   res.setHeader('Content-Type', 'text/html');
//   //   res.end(`<h3>Welcome to altcampus</h3>`);
//   res.writeHead('202', { 'Content-Type': 'text/html' });
//   res.end(`<h3>Welcome to altcampus</h3>`);
// }
// server.listen(8000, () => {
//   console.log('server listening on port 8000');
// });

// ===========================================8=======================================
// function handleServer(req, res) {
//   //   res.statusCode = 202;
//   //   res.setHeader('Content-Type', 'text/html');
//   //   res.end(`<h3>Welcome to altcampus</h3>`);
//   res.writeHead('202', { 'Content-Type': 'text/json' });
//   res.end(`{success: true, message: 'Welcome to Nodejs'}`);
// }
// server.listen(8888, () => {
//   console.log('server listening on port 8888');
// });

// ===========================================9=======================================
// function handleServer(req, res) {
//   if (req.method === 'POST' && req.url === '/') {
//     res.setHeader('Content-Type', 'text/html');
//     console.log('This is post method on index route');
//     res.end(`<h2>posted for first time</h2>`);
//   }
// }
// server.listen(5050, () => {
//   console.log('server listening on port 5050');
// });

// ===========================================10=======================================
// function handleServer(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-Type', 'text/plain');
//     console.log('plain text');
//     res.end(`Onkar Shingate`);
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.setHeader('Content-Type', 'text/html');
//     console.log('html text');
//     res.end(`<h2>Onkar Shingate</h2>`);
//   } else {
//     res.end(' 404 Page not found');
//   }
// }
// server.listen(2345, () => {
//   console.log('server listening on port 2345');
// });

// ===========================================11=======================================
// function handleServer(req, res) {
//   if (req.method === 'GET' && req.url === '/users') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write(`<input type="text" placeholder="Name">`);
//     res.end(`<input type="email" placeholder="email">`);
//   } else if (req.method === 'POST' && req.url === '/users') {
//     res.end(`Posted for second time`);
//   } else {
//     res.end(' 404 Page not found');
//   }
// }
// server.listen(2345, () => {
//   console.log('server listening on port 2345');
// });

// ===========================================12=======================================
function handleServer(req, res) {
  let parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname);
  console.log(parsedUrl.query.email);
  res.setHeader('Content-Type', 'text/json');
  res.end(`[{email:${parsedUrl.query.email}}]`);
}
server.listen(2345, () => {
  console.log('server listening on port 2345');
});
