var fs = require('fs'),
    path = require('path');

var directory = './documents';

console.log('Start');
fs.readdir(directory, function (err, files) {
    if (err) {
        console.error(err);
        return;
    }

    for (var i = 0; i < files.length; i++) {
        file = files[i];
        console.log(file);

        var fileContentBuffer = fs.readFileSync(path.join(directory, file));
        console.log(fileContentBuffer.toString());
    }
});
console.log('End');