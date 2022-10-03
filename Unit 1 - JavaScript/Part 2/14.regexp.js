"use strict";

let reg = new RegExp("[aeiou]", "ig");
let str = "Hello world!. Are you ok?";
console.log(str.match(reg));

let reg2 = /[aeiou]/ig;
console.log(str.match(reg2));

let str3 = "Hello, I'm using regular expressions";
let reg3 = /reg/;
console.log(reg3.test(str3)); // Prints true

let str4 = "84573454T";
let reg4 = /[0-9]/;
let reg5 = /..../;
console.log(reg4.test(str4));
console.log(reg5.test(str4));

// \w === [a-zA-Z0-9_]
// \d === [0-9]

let str5 = "There's a cat on the carpet";
let reg6 = /\bcar\b/; // "car" word!
console.log(reg6.test(str5)); // false

let reg7 = /[0-9]{8}[a-z]?/i;
console.log(reg7.test(str4)); // true

let dni = "My DNI is 43564534G"
let dni2 = "43564534G"

let regDni = /^[0-9]{8}[a-z]$/i; // Only contains a DNI!
console.log(regDni.test(dni));
