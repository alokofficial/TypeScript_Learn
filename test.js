"use strict";
// non-null assertion operator
function greet(user) {
    console.log(`Hello, ${user.name}`); // Error: Object is possibly 'undefined'.
}
// Using the non-null assertion operator
function greetWithAssertion(user) {
    console.log(`Hello, ${user.name}`);
}
const user1 = { name: "John" };
const user2 = {};
greet(user1); // Works fine
greet(user2); // Error: Object is possibly 'undefined'.
greetWithAssertion(user1); // Works fine
greetWithAssertion(user2); // Works, but might cause runtime errors if name is actually undefined
