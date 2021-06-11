//Make a program that generates an integer between 1 and 100 (don't display it to the user).
//Then the program should display "Guess the number" and ask the user to guess. If the user enters a number which is too low it should display "Too low" and re-ask the question. If the user enters a number which is too high it should display "Too high" and re-ask the question. If the user guess correctly it should display "Well guessed!" and exit.

const readlineSync = require("readline-sync");

let random = Math.floor(Math.random() * 100);

let n = readlineSync.question('Can you give me a number?');

while (n != random){
    if (n <= random){
        console.log("Too low!");
        n = readlineSync.question('Can you give me a number?');
    }
    else if (n >= random){
        console.log("Too high!");
        n = readlineSync.question('Can you give me a number?');
    }
    
}
console.log("Well guessed!");



  