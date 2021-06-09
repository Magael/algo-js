//Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.
//Write a documentation for the rand10() function.

function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;//The maximum is inclusive and the minimum is inclusive
  }
  console.log(rand10(1,10));

  