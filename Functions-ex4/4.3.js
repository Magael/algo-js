//By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.
//Write a documentation for the multiRand(n) function.
//Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.
const readlineSync = require("readline-sync");

function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;//The maximum is inclusive and the minimum is inclusive
  }
let n = readlineSync.question('Can you give me a number?');
let arr = [];
function multiRand(n){
           
        for (let i = 1; i <= n; i++){
            arr.push(rand10(1,10));
        }

return arr;
}
  console.log(multiRand(n));

