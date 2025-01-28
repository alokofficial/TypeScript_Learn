"use strict";
//classes
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    get getMyHeight() {
        return this.height;
    }
    set changeHeight(val) {
        this.height = val;
    }
}
const abhi = new Player(100, 150, 23);
console.log("Heigfht", abhi.getMyHeight);
abhi.changeHeight = 500;
console.log("Heigfht", abhi.getMyHeight);
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
const abhi = new Player2(100, 150, 23, true);
console.log("Weight", abhi.weight);
console.log("Height", abhi.getMyHeight());
console.log("Power", abhi.getMyPower());
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const product1 = new Product("Macbook", 2000, 20);
