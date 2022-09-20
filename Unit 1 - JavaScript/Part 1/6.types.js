let a = "12";
let b = "13";
console.log(a + b); // Prints "1213"
console.log(+a + +b); // Prints 25 (12 + 13)

console.log(0 == "");
console.log(0 === "");
console.log(undefined == null);

console.log(7 < "5");

let str = "";
console.log('"" is equivalent to = ' + Boolean(str));
console.log('"" is equivalent to = ' + !!str);

let n1 = 23;
let n2 = 54;
console.log("" + n1 + n2); // 2354
console.log(String(n1) + n2); // 2354

