const readlineSync = require("readline-sync");
let Number1 = readlineSync.question('Can you give me a decimal number please?');
let Number2 = readlineSync.question('Can you give me a decimal number please?');
console.log(Math.trunc(Number1)*Number2);