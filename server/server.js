var http = require('http');
var path = require('path');

var port = process.env.PORT || 3000;
var host = process.env.HOST || '127.0.0.1';

var paths = {
  "/": path.join(__dirname + '../client/index.html');
}

var server = http.createServer(function (request, response) {
  if (req.url === '/' && req.method === 'GET') {
    var index = paths['/'];
    fs.readFile(index, 'binary', function (err,content) {
      if(err) {
        res.writeHead(500);
        console.log(err);
        res.end('we encountered an error reading the file');
      } else {
        res.writeHead(200);
        res.end(content);
      }
    });
  } else {
    res.writeHead(400);
    res.write("File not found");
    res.end();
  }
}).listen(port, host);