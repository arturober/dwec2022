let a = new Array(10);
console.log(a);
console.log(a[2]); // undefined
console.log(a[22]); // undefined

let letters = new Array("a", "b", "c", "d", "e");
let letters2 = ["a", "b", "c", "d", "e"];
console.log(letters); // ["a", "b", "c", "d", "e"]
console.log(letters2); // ["a", "b", "c", "d", "e"]

letters2.length = 2;
console.log(letters2); // ["a", "b"]

let nums = [10];
console.log(nums); // [10]