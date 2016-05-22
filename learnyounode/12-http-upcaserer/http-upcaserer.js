var http = require('http');
var map = require('through2-map');

var port = Number(process.argv[2]);

var server = http.createServer((request, response) => {
  if (request.method != 'POST')
    return res.end('Only POST is accepted.\n');
  request.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(response);
});
server.listen(port);