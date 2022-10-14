import { DateTime } from "/node_modules/luxon/build/es6/luxon.js";

function sayHello(name) {
    let date = DateTime.now();
    console.log(`Hello ${name}`);
    console.log(date.setLocale("es").toLocaleString());
}

let name = "Peter";
sayHello(name);
