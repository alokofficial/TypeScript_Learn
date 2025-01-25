// Generics 

// which accept any values

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");

console.log(output);

let output2 = identity<number>(100);

console.log(output2);

let output3 = identity<boolean>(true);

console.log(output3);