// Find maximum between three numbers using ternary operator
let num1 = 10;
let num2 = 25;
let num3 = 15;

let max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);

console.log(`Maximum of ${num1}, ${num2}, ${num3} is: ${max}`);
