// Defining interfaces

interface User {
    name:string;
    email:string;
    age?:number;
}
function printUser(user:User){
    console.log(user.name);
    console.log(user.email);
    console.log(user.age);
}
printUser({
    name:"John",
    email:"4p9bM@example.com",
})
// extending interfaces
interface Admin extends User{
    role:string;
}

function printAdmin(admin:Admin){
    admin.role
}
printAdmin({
    name:"John",
    email:"4p9bM@example.com",
    role:"admin"
})

// same name interfaces
interface User1{
    name:string;
    email:string;
    age?:number;
}

interface User1{
    role:string;
}  

function a(user:User1){
    user.role,
    user.email,
    user.age,
    user.name
}