//Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.

const readlineSync = require("readline-sync");

let n = Number(readlineSync.question('Can you give me a number?'));
let divisors = []; 
// function to print the divisors
function printDivisors(n)
{
    for (let i = 0; i < n; i++)
    {
        if (n % i === 0 && i !== 1) divisors.push(i);
    }
}
printDivisors(n); 
console.log(divisors);