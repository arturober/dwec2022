let people = new Map();
people.set("34563454T", "Juan Pérez");
people.set("43634693Y", "Marta Martínez");
people.set("24583466B", "Ana Vázquez");

console.log(people);
console.log(people.size); // 3
console.log(people.has("34563454T")); // true
console.log(people.get("34563454T")); // Juan Pérez
people.delete("34563454T");
console.log(people.size); // 2

people.set("24583466B", "Nadie Nadiez");
console.log(people); // {'43634693Y' => 'Marta Martínez', '24583466B' => 'Nadie Nadiez'}

// for(let person of people) {
//     console.log(`${person[0]} - ${person[1]}`);
// }

// for(let [dni, name] of people) {
//     console.log(`${dni} - ${name}`);
// }

people.forEach((name, dni) => {
  console.log(`${dni} - ${name}`);
});

let set = new Set();
set.add("John");
set.add("Mary");
set.add("Peter");
set.add("Anne");
console.log(set.has("Peter")); // true
set.delete("Peter");
console.log(set.has("Peter")); // false

console.log(set.size); // Prints 3
set.add("Mary"); // Mary already exists
console.log(set.size); // Prints 3
// Iterate through the values
set.forEach(value => console.log(value));

console.log(set);
console.log(Array.from(set));
