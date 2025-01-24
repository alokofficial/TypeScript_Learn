class User {
    constructor( public readonly name:string){}

    changeName(){
        this.name ="alok" // error: cannot assign to 'name' because it is a read-only property
    }
}

let u1 = new User("sachin")