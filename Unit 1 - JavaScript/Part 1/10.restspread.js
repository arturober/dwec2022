function sumNums(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumNums(12, 6, 18, 7));
console.log(sumNums());
console.log(sumNums(6));

function printUserInfo(name, ...languages) {
  console.log(
    name + " knows " + languages.length + " languages: " + languages.join(" - ")
  );
}
// Prints "Peter knows 3 languages: Java - C# - Python"
printUserInfo("Peter", "Java", "C#", "Python");
// Prints "Mary knows 5 languages: JavaScript - Angular - PHP - HTML - CSS"
printUserInfo("Mary", "JavaScript", "Angular", "PHP", "HTML", "CSS");

let nums = [4, 12, 6, 17];
console.log(Math.max(4, 12, 6, 17)); // 17
console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 17

let nums2 = [100, 203, 500];
// Concat nums and nums2
// let nums3 = [nums, nums2].flat();
let nums3 = [...nums, ...nums2, 1000];
console.log(nums3.toString());

let words = ["dog", "tree", "house", "car", "zebra", "bird"];
// Create a copy and sort the copy
// let wordsSorted = Array.from(words);
let wordsSorted = [...words];
wordsSorted.sort();
console.log(words);
console.log(wordsSorted);

// let w1 = words[0];
// let w2 = words[1];
// let w3 = words[2];
let [w1, w2, w3] = words;
console.log(`${w1} - ${w2} - ${w3}`);

// Function that receives an array and adds the first two numbers
function addFirst2([n1 = 0, n2 = 0]) {
    return n1 + n2;
}

console.log(addFirst2([4, 8, 12, 9, 3]));
console.log(addFirst2([4]));
console.log(addFirst2([]));
