// protected example
class BottleMaker {
    constructor (protected name:string){}
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