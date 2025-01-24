"use strict";
// Abstract Classes
class epoxy {
    static printVersion() {
        console.log(`Version ${this.version}`);
        return;
    }
}
epoxy.version = 1.0;
console.log(epoxy.printVersion());
