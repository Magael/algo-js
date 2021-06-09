//Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

const readlineSync = require("readline-sync");
let i = readlineSync.question('Can you give me a number between 1 and 10?');
let x = i;
for (let y = 1; y <= i; ++y ){
    let n = readlineSync.question('Can you give me a number between 1 and 10?');
    x = parseInt(x) + parseInt(n);
}
console.log(x);

