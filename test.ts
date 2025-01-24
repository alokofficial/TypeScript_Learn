// Abstract Classes
class epoxy{
   static version =1.0;
    static printVersion():void{
        console.log(`Version ${this.version}`);
        return 
    }
}
console.log(epoxy.printVersion());