// Generics

// which accept any values

function abcd<T> (a:T, b:T):T {
    // return "alok"   // this is string literal but require here T type

    // return "alok" as T

    return <T> "alok"


}

console.log(abcd <string>("a", "b"));