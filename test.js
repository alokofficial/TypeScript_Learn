"use strict";
// Type Guards
class TvKaRemote {
    switchTvOff() {
        console.log("Switching TV off");
    }
}
class CarKaRemote {
    switchCarOff() {
        console.log("Switching Car off");
    }
}
const tv = new TvKaRemote();
const car = new CarKaRemote();
function switchOffKaro(device) {
    if (device instanceof TvKaRemote) {
        device.switchTvOff();
    }
    else if (device instanceof CarKaRemote) {
        device.switchCarOff();
    }
}
switchOffKaro(tv);
switchOffKaro(car);
