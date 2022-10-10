"use strict";

let promiseResult;

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(6), 2000);
});

promise.then(result => console.log(result));

console.log("This is the main program code");

let promise2 = promise.then(result => {
    return result * 10;
}).then(result => console.log(result)); // 60

