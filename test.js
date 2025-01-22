"use strict";
// access modifiers ( public, private, protected )
class BottleMaker {
    constructor(name) {
        this.name = name;
    }
}
let b1 = new BottleMaker("Pepsi");
console.log(b1.name); //not able to access
