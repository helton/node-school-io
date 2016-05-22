var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);

var contents = {};
var count = 0;

urls.forEach(url => {
  http.get(url, response => {
    response.pipe(bl((err, data) => {
      if (err)
        return console.error(err);
      data = data.toString();
      contents[url] = data;
      count++;
      if (count === urls.length)
        urls.forEach(url => console.log(contents[url]));
    }));
  });
});