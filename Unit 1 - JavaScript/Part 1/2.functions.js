"use strict";

function sayHello() {
    console.log("Hello World!");
}

sayHello();

function sayHello2(name) {
    if(typeof name !== "string") {
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


