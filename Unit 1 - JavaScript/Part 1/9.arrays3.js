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

