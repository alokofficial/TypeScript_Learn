"use strict";
// function overloading 
function abcd(a, b) {
    if (typeof b === "undefined" && typeof a === "string") {
        console.log(a);
    }
    else if (typeof b === "number" && typeof a === "string") {
        console.log(b);
        return b;
    }
    else
        throw new Error("error");
}
abcd("hi");
abcd("hi", 10);
