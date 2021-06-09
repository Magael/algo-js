//Write a program that will add all the elements of an array.
//Test it with the following arrays:
//[1, 2, 3, 4, 5] => 15
//[100, 101, 102] => 303
const readlineSync = require("readline-sync");

let NbArray = [1,2,3,4,5];
let StArray = [100,101,102];
var sum = 0;

for (let i = 0; i < NbArray.length; i++){
    sum += NbArray[i]
}
console.log(sum);

for (let i = 0; i < StArray.length; i++){
    sum += StArray[i]
}
console.log(sum);


