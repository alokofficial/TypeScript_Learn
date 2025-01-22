type a=string;
// type a=number; // can not merge

interface b {
    val1:string;
}
interface b{
    val2:string;
} // can merge

//interfaces can be extended but type is not
//Type aliases are more flexible and versatile for defining various types, while interfaces are specifically designed for defining object-oriented contracts and structures. The choice between them depends on the specific use case and the desired level of flexibility and structure.