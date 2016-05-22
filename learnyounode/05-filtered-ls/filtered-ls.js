var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var filteredExtension = '.' + process.argv[3];

fs.readdir(folder, (err, fileList) => {
  fileList.forEach(file => {
    if (err)
      console.error(err);
    if (path.extname(file) === filteredExtension)
      console.log(file);
  });
});