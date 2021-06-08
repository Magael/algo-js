const readlineSync = require("readline-sync");
console.log("It works !!!");
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);

let age = 23;

let sisterAge = age + 11;

age += 12; // age = age + 12;

console.log(age);

console.log(10+20);