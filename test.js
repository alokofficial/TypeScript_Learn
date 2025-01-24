"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "alok"; // error: cannot assign to 'name' because it is a read-only property
    }
}
let u1 = new User("sachin");
