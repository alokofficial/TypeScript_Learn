// access modifiers ( public, private, protected )
class BottleMaker {
    constructor( protected name:string){ //not able to access from outside

    }
}

let b1 = new BottleMaker("Pepsi");
console.log(b1.name); //not able to access
