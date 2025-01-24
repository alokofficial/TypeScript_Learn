// getter and setter

class User{
    constructor(public name: string, public age: number){
        this.name = name;
        this.age = age;
    }

    // getter
    get fullName(): string{
        return `Hello ${this.name}`
    }

    // setter
    set fullName(value: string){
        this.name = value;
    }
}

const user = new User('John', 30);
console.log(user.fullName);
user.fullName = 'Jane';
console.log(user.fullName);