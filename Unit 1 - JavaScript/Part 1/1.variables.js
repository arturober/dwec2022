"use strict";

let v = "Hello";
console.log(typeof v); // string
v = 34;
console.log(typeof v); // number

let noval;
console.log(typeof noval); // undefined

if(noval === undefined) {
    console.log("Variable is undefined");
}

if(!noval) {
    console.log("Variable is undefined");
}

let noval2 = null;
console.log(typeof noval2); // object

// num = 23; // ERROR -> Uncaught ReferenceError: num is not defined
// console.log(num);
