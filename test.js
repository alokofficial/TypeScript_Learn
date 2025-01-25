"use strict";
// rest
function abcd(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(abcd(1, 2, 3, 4, 5));
console.log(abcd(1, 2, 3, 4, 5, 6));
