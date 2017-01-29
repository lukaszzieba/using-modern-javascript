var add = require('./calculator').add,
    service = require('./services/service'),
    stuff = require('./services');

var result = add(10, 20);
console.log(result);
console.log(stuff);

