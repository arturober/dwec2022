"use strict";

function sayHello() {
  console.log("Hello World!");
}

sayHello();

function sayHello2(name) {
  if (typeof name !== "string") {
    console.error("Name must be a string!");
    return;
  }

  if (name) {
    console.log("Hello " + name);
  } else {
    console.error("No name received!");
  }
}

sayHello2("Peter"); // Hello Peter
sayHello2("John", "Paula"); // Hello John
sayHello2(""); // No name received!
sayHello2(); // Name must be string! (undefined)
sayHello2(23); // Name must be string!

function add(n1, n2) {
  return n1 + n2;
}

console.log(add(6, 7));

let addAnonymous = function (n1, n2) {
  return n1 + n2;
};

console.log(addAnonymous(6, 7));

console.log(typeof add); // function
console.log(typeof addAnonymous); // function

let add2 = add;
console.log(add2(4, 5));

function calculator(n1, n2, op) {
  console.log(op(n1, n2));
}

calculator(5, 8, add); // 13
calculator(5, 8, addAnonymous); // 13
calculator(5, 8, function (n1, n2) {
  return n1 - n2;
});
calculator(5, 8, (n1, n2) => n1 * n2);

function sayHello3(name = "Anonymous") {
    console.log("Hello " + name);
}

sayHello3(); // Hello Anonymous
sayHello3(""); // Hello Anonymous
sayHello3("Mary"); // Hello Mary
