class User{
    constructor ( public name:string, public age:number, public gender?:string) {
    }

}

let u1=new User("zhangsan",20);
let u2=new User("lisi",20,"female");