let a = [3, 22, 15, 61, 9, 54];
console.log(a.every(num => num < 100)); // true -> Check if every number is lower than 100. Prints true
console.log(a.every(num => num % 2 === 0)); // false -> Check if every number is even. Prints false

console.log(a.some(num => num % 2 === 0)); // Check if any number is even. Prints true


let names = ["Juliet", "Eve", "John", "George", "William", "Anne"];
let nameLengths = names.map(n => n.length);
console.log(nameLengths); // [6, 3, 4, 6, 7, 4]

let namesWithJ = names.filter(n => n.startsWith("J"));
console.log(namesWithJ); // ['Juliet', 'John']

let namesJLengths = names.filter(n => n.startsWith("J")).map(n => n.length);
console.log(namesJLengths);

let totalJLengths = names.filter(n => n.startsWith("J")).map(n => n.length).reduce((total, n) => total + n);
console.log(totalJLengths);

console.log(a.reduce((total, n) => total + n));

let chars = Array.from("Hello world!");
console.log(chars.toString());
console.log(chars.filter(l => l.match(/[aeiou]/)).toString());

let nums = [3, 9, 13 ,6, 12, 51, 10];
// Show only even numbers
console.log(nums.filter(n => n % 2 === 1));
// Delete only the first even number
let posEven = nums.findIndex(n => n % 2 === 0);
nums.splice(posEven, 1);
console.log(nums); // [3, 9, 13, 12, 51, 10]

let words = ["house", "tree", "dog"];
console.log(words.map(w => Array.from(w))); // [["h", "o", "u", "s", "e"], ["t", "r", "e", "e"], ["d", "o", "g"]]
console.log(words.flatMap(w => Array.from(w))); // ["h", "o", "u", "s", "e", "t", "r", "e", "e", "d", "o", "g"]

