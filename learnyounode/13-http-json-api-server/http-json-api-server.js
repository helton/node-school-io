var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

var server = http.createServer((request, response) => {
  var parsedUrl = url.parse(request.url, true);
  var date = new Date(parsedUrl.query.iso);
  var result;
  if (parsedUrl.pathname === '/api/parsetime') {
    result = {  
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
  }
  else if (parsedUrl.pathname === '/api/unixtime') {
    result = { 
      'unixtime': date.getTime()
    };
  };
  if (result) {
    response.writeHead(200, { 'content-type': 'application/json' });  
    response.end(JSON.stringify(result));
  }
  else
    response.writeHead(404);
});
server.listen(port);