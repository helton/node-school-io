var fs = require('fs');
var path = require('path');
var filterFilesByExtension = require('./filterFilesByExtension');

var folder = process.argv[2];
var extension = process.argv[3];

filterFilesByExtension(folder, extension, (err, list) => {
  if (err)
    console.error(err);
  list.forEach(file => console.log(file));  
});