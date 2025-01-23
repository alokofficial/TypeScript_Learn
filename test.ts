// protected example
class BottleMaker {
    constructor (protected name:string){}

    getDetails(){
        console.log(this.name)
    }
}

class MetalBottleMaker extends BottleMaker {
    constructor(name:string){
        super(name)
    }
    getValue(){
        console.log(this.name)
    }
}
let b1= new MetalBottleMaker('cello')
b1.getDetails()
b1.getValue()