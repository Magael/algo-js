const readlineSync = require("readline-sync");
let question = 7;
let name = readlineSync.question('Can you give me your surname please?');
console.log( (--question) + " questions left");
let firstName = readlineSync.question('Can you give me your name please?');
console.log( (--question) + " questions left");
city = readlineSync.question('Can you tell me where you live please?');
console.log( (--question) + " questions left");
let pet = readlineSync.question('Do you have a pet?');
console.log( (--question) + " questions left");
let pet1 = readlineSync.question('What pet do you have?');
console.log( (--question) + " questions left");
let Number1 = readlineSync.question('Can you tell me your shoe number please?');
console.log( (--question) + " questions left");
let Number2 = readlineSync.question('Can you tell me your year of birth please?');
console.log( (--question) + " questions left");

console.log("Your name is " + name +  firstName + " you live in " + city + ", and you where born in " + Number2 + ". You have a " + pet1 + "." + "Your shoe size is " + Number1 + ".");