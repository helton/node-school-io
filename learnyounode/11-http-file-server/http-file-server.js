var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var filePath = process.argv[3];

var server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(filePath).pipe(response);
});
server.listen(port);