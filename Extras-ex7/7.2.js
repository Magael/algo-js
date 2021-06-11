//Make a program that asks for an integer n and generates the n first Fibonacci numbers.

const readlineSync = require("readline-sync");
//Fibonacci Series using Recursion
let n = readlineSync.question('Can you give me a number?');
     
let i;
let fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= n; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

