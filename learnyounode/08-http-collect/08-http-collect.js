var http = require('http');
var url = process.argv[2];

http.get(url, response => {
  response.setEncoding('utf8');
  var data = '';  
  response.on('data', chunk => data += chunk);
  response.on('end', () => {
    console.log(data.length);
    console.log(data);
  });
  response.on('error', console.error);
}).on('error', console.error);