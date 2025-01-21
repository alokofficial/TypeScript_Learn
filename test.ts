let a:unknown;
a=12;
a="alok";

if(typeof a === "string"){
    a.toUpperCase(); //we get suggestion for string related
}
if(typeof a === "number"){
    a.toFixed(); //we get suggestion for number related
}

