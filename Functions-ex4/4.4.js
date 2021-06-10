//Create a function named average(arr) that takes an array of numbers as argument and returns the average.
//Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.
//Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.
//Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

const readlineSync = require("readline-sync");

let arr = readlineSync.question('Can you give me a number?');
let n = [];
let sum = 0;

function average(arr){
    
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum/arr.length; //This function gives you an average.
}
function min(arr){
    return Math.min(...arr);
}                               //This function gives you the minimum.
function max(arr){
    return Math.max(...arr);
}                               //This function gives you the maximum
function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;//The maximum is inclusive and the minimum is inclusive
  }


function multiRand(arr){
           
        for (let i = 1; i <= arr; i++){
            n.push(rand10(1,10));
        }

return n;
}                       //This function returns an array of n numbers between 1 and 10.
  console.log([multiRand(arr) + "," + average(arr) + "," + min(arr) + "," + max(arr)]);
