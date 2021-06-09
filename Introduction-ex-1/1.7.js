//Ask to the user its shoe size and its birth year. Then make the following calculation:

//Multiply the shoe size by 2
//Add 5 to the result
//Multiply that by 50
//Subtract the birth year
//Add 1766
//Test with your own birth year and your shoe size.

const readlineSync = require("readline-sync");
let Number1 = readlineSync.question('Can you tell me your shoe number please?');
let Number2 = readlineSync.question('Can you tell me your year of birth please?');
let Number3 = Number1 * 2;
let Number4 = Number3 + 5;
let Number5 = Number4 * 50;
let Number6 = Number5 - Number2;
let Number7 = Number6 + 1766;
console.log(Number7);