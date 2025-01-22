"use strict";
// protected example
class BottleMaker {
    constructor(name) {
        this.name = name;
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
