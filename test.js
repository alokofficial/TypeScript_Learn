"use strict";
// protected example
class BottleMaker {
    constructor(name) {
        this.name = name;
    }
    getDetails() {
        console.log(this.name);
    }
}
class MetalBottleMaker extends BottleMaker {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name);
    }
}
let b1 = new MetalBottleMaker('cello');
b1.getDetails();
b1.getValue();
