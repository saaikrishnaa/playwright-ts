console.log("Arithmetic Operators");
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation


console.log("Assignment Operators");
let y=5;
 y+= 5; // y = y + 5
console.log(y); // 10

y -=5;
console.log(y); // 5

console.log("Comparison or Relational Operators");
console.log(5>2); // true
console.log(5<2); // false
// console.log(5!==4); // true

const x = 10;
const z = 20;

// console.log(x !== z); // false - which works fine with javascript

//using type safety feature
const p:number=5;
const q:number=6;
console.log(p != q);

//logical operators
let isEnable = true;
let isComplete = false;

console.log(isEnable && isComplete);
console.log(isEnable || isComplete);
console.log(!isComplete);

//unary operator
let value=10;
console.log(value++);
console.log(++value);
