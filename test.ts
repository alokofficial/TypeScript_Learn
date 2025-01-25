// Type Assertions

let a: any = 30;

let b = a as number;
console.log(b.toFixed(2));

let c = a as string;
console.log(c);

let d = <number>a;
console.log(d.toFixed(7));