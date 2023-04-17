var calculator = require('./calculator');
const readline = require("readline-sync");

let a = Number(readline.question());
let b = Number(readline.question());
console.log("Addition : " + calculator.add(a, b));
console.log("Subtraction : " + calculator.subtract(a, b));
console.log("Multiplication : " + calculator.multiply(a, b));
console.log("division:"+calculator.divide(a,b));
console.log("mod function:"+calculator.mod(a,b));