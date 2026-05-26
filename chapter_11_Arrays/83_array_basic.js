let fruits = [];
let fruits_fresh = ["apple", "banana", "cherry"];

console.log(fruits[0]);
console.log(fruits_fresh[0]);
console.log(fruits_fresh[5]);


let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null]; // JS arrays can hold any type.

// Creating Arrays// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor

let scores = new Array(3);// here the 3 is length
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
let scores2 = new Array(1, 2, 3);
console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
console.log(chars);

// let numbers1 = Array.from("123456789");
// console.log(numbers1);