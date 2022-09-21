let letters = ["a", "b", "c", "d"];
letters.push("e", "f");
console.log(letters.toString());
letters.unshift("Y", "Z");
console.log(letters.toString());
console.log(letters.pop());
console.log(letters.toString());
console.log(letters.shift());
console.log(letters.join(" - ")); // Z - a - b - c - d - e

let nums = [1, 2, 3];
let concat = nums.concat(letters, "X");
console.log(concat.toString()); // [1, 2, 3, 'Z', 'a', 'b', 'c', 'd', 'e', 'X']

console.log(letters.slice(2, 5)); // [b,c,d]

let words = ["bird", "house", "tree", "car"];
// Delete "tree" and change it for "bush" and "grass"
words.splice(2, 1, "bush", "grass");
console.log(words); // ['bird', 'house', 'bush', 'grass', 'car']
words.reverse();
console.log(words); // ['car', 'grass', 'bush', 'house', 'bird']
words.sort();
console.log(words); // ['car', 'grass', 'bush', 'house', 'bird']

let nums2 = [23, 14, 7, 213, 57, 9, 45, 111];
nums2.sort((n1, n2) => n1 - n2);
console.log(nums2);
nums2.sort((n1, n2) => n2 - n1);
console.log(nums2);

let names = ["Juliet", "Eve", "John", "George", "William", "Anne"];
names.sort((n1, n2) => n1.length - n2.length);
console.log(names); // ['Eve', 'John', 'Anne', 'Juliet', 'George', 'William']
names.sort((n1, n2) => n1.localeCompare(n2));
console.log(names); // ['Anne', 'Eve', 'George', 'John', 'Juliet', 'William']

// Order by name length. If equal order alphabetically
names.sort((n1, n2) => {
  let dif = n1.length - n2.length;
  return dif === 0 ? n1.localeCompare(n2) : dif;
});

// Same as above
// names.sort((n1, n2) => n1.length - n2.length || n1.localeCompare(n2));
console.log(names);
