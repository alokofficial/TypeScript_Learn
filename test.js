"use strict";
// getter and setter
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    // getter
    get fullName() {
        return `Hello ${this.name}`;
    }
    // setter
    set fullName(value) {
        this.name = value;
    }
}
const user = new User('John', 30);
console.log(user.fullName);
user.fullName = 'Jane';
console.log(user.fullName);
