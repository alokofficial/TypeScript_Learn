"use strict";
// Generics 
// which accept any values
function identity(arg) {
    return arg;
}
let output = identity("myString");
console.log(output);
let output2 = identity(100);
console.log(output2);
let output3 = identity(true);
console.log(output3);
