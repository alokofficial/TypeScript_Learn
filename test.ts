// constructor

class HumanMaker{
    public name;
    public age;
    constructor(name: string,age: number){
        this.name = name;
        this.age=age;
    }
}

let h1= new HumanMaker("Alok", 23);

let h2 = new HumanMaker("Sneha", 26);

console.log(h1);
console.log(h2);