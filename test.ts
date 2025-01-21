// never

function a(){
    while(true){}
}
a();
console.log("case 1");

function b():never{
    while(true){}
}
b();
console.log("case 2"); // unreachable