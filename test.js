"use strict";
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('login success');
        }, 3000);
    });
}
login().then((res) => {
    console.log(res);
});
