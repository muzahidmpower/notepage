var http = require('http');
var port = 8080;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Welcome to NotePage!\n");
});

server.listen(port);

console.log("Server running at http://127.0.0.1:" + port);