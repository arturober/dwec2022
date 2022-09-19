console.log(0.34e-3);

let price = 34.23;
let priceTax = price * 1.21;

console.log(priceTax.toFixed(2) + "€");

console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE*Number.MAX_VALUE); // Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

function showAge(age) {
    age = +age; // Transforms the parameter to number
    if(Number.isNaN(age)) {
        console.error("Age is not a number");
    } else {
        console.log("Your age is " + age);
    }
}

showAge(23);
showAge("54");
showAge("Hello");
showAge(null);
showAge(""); 
showAge(); // undefined

let a = 3;
let b = "4";
let c = "Hello";

console.log(a * b); // 12 (3*4)
console.log(a * c); // NaN
console.log(a + b); // 34
console.log(a + +b); // 7

console.log(2**8); // 256 (2⁸)
console.log(Math.pow(2, 8)); // 256 


