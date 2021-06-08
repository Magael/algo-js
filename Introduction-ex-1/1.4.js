const readlineSync = require("readline-sync");
let name = readlineSync.question('Can you give me your surname please?');
let firstName = readlineSync.question('Can you give me your name please?');
city = readlineSync.question('Can you tell me where you live please?');
console.log("Your name is " + name +  firstName + " and you live in " + city);