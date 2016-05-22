var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if (err)
    console.error(err);
  var lines = data.split('\n').length - 1;
  console.log(lines);
});