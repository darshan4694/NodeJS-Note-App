const _ = require('lodash');

// Examples:
// 1: Check the the value is String or not

var checkString_1 = _.isString(1);
var checkString_Darshan = _.isString("Darshan");

console.log("is 1 a String: "+checkString_1);
console.log("is 'Darshan' a String: "+checkString_Darshan);

// 2: Convert array to the set by eliminating duplicate values

var array = ["Darshan", 1, "Shah", 1, "Darshan", 2, 3, 4, true, true];
var arrayToSet = _.uniq(array);

console.log("Initially the array is : " + array);
console.log("After using 'uniq' ");
console.log("New array ( converted to set ) : " + arrayToSet);

