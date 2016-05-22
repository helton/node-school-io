var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, response => {
  response.pipe(bl((err, data) => {
    if (err)
      return console.error(err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});