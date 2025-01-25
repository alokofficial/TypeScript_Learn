"use strict";
// Generics
// which accept any values
function abcd(a, b) {
    // return "alok"   // this is string literal but require here T type
    // return "alok" as T
    return "alok";
}
console.log(abcd("a", "b"));
