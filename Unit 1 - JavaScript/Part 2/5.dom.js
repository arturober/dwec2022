"use strict";

console.log(document.querySelector("#div1 a").title); // Prints "hello world"
// console.log(document.querySelector("#div1 > a").title); // Cannot read properties of null (reading 'title')
console.log(document.querySelector("#div1 > p > a").title); // Prints "hello world"
console.log(document.querySelector(".normalLink[title^='bye']").title); // Prints "bye world"
console.log(document.querySelector(".normalLink[title^='bye'] + a").title); // Prints "hello again"

console.log("******** querySelectorAll ********");
let elems = document.querySelectorAll(".normalLink");
// Prints "hello world" and "bye world"
elems.forEach(elem => console.log(elem.title));

let elems2 = document.querySelectorAll("a[title^='hello']");
// Prints "hello world" and "hello again"
elems2.forEach(elem => console.log(elem.title));

let elems3 = document.querySelectorAll("a[title='hello world'] ~ a");
// Prints "bye world" and "hello again"
elems3.forEach(elem => console.log(elem.title));

