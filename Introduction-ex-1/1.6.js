//Ask two integers to the user. Display the rest of the integer division of the two numbers.

const readlineSync = require("readline-sync");
let Number1 = readlineSync.question('Can you give me a number please?');
let Number2 = readlineSync.question('Can you give me a number please?');
console.log(Number1 % Number2);