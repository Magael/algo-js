//Create a function factorial(a) that returns the factorial of a number.
//That function must be recursive.
const readlineSync = require("readline-sync");
function factorial(num) {
    if (num === 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }
  console.log(factorial(5));//function factorial(a) that returns the factorial of a number. This function is recursive.