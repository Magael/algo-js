//Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

//Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

//Bonus 2: be polite in the error messages. (facultative)

const readlineSync = require("readline-sync");
let min = readlineSync.question('Can you give me a number?');
let max = readlineSync.question('Can you give me a number bigger than the previous one?');
let current = readlineSync.question('Can you give me a random number?');

if ((min >= current) && (current <= max)) {
    console.log("Congratulations!");
} else {
    console.log("Try again!");
}