//Write a program that will calculate the average value of a given array.
//Test it with the following arrays:
//[1, 2, 3, 4, 5] => 3
//[100, 101, 102] => 101

const readlineSync = require("readline-sync");
let NbArray = [1,2,3,4,5];
let StArray = [100,101,102];
var sum = 0;
var sum1 = 0;

for (let i = 0; i < NbArray.length; i++){
    sum += NbArray[i]
}
console.log(sum/NbArray.length);

for (let i = 0; i < StArray.length; i++){
    sum1 += StArray[i]
}
console.log(sum1/StArray.length);