var calc = require('../calculator');

var result = calc.add(11,23);
console.log(result);

exports.add = function(a, b) {
    return a + b;
};