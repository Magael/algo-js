//Create a program that can sort an array without using Array.sort() or a similar method. Test it with multiple arrays of numbers.
const readlineSync = require("readline-sync");

function nbSort(array) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  let numbers = [12, 10, 15, 11, 14, 13, 16];
  nbSort(numbers);
  console.log(numbers);