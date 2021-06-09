//Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

const readlineSync = require("readline-sync");
let i = Number(readlineSync.question('Can you give me a number between 1 and 7?'));
switch (i) {
    case 1:
      i = "Monday";
      console.log("1=>Monday!");
      break;
    case 2:
      i = "Tuesday";
      console.log("2=>Tuesday!");
      break;
    case 3:
      i = "Wednesday";
      console.log("3=>Wednesday!");
      break;
    case 4:
      i = "Thursday";
      console.log("4=>Thursday!");
      break;
    case 5:
      i = "Friday";
      console.log("5=>Friday!");
      break;
    case 6:
      i = "Saturday";
      console.log("6=>Saturday!");
      break;
    case  7:
      i = "Sunday";
      console.log("7=>Sunday!");
  }




