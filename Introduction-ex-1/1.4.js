//Make this same thing as Exercise 2 but this time ask the user for the name, the first name and the city.

const readlineSync = require("readline-sync");
let name = readlineSync.question('Can you give me your surname please?');
let firstName = readlineSync.question('Can you give me your name please?');
city = readlineSync.question('Can you tell me where you live please?');
console.log("Your name is " + name +  firstName + " and you live in " + city);