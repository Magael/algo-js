//Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

const readlineSync = require("readline-sync");
let Number1 = readlineSync.question('Can you give me a decimal number please?');
let Number2 = readlineSync.question('Can you give me a decimal number please?');
console.log(Math.trunc(Number1)*Number2);