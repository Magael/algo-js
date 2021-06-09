//Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.
//Write a documentation for the calcSurface function.
const readlineSync = require("readline-sync");

function calcSurface (length,width) {
    return length*width;
} //This creates the function calcsurface
let width = readlineSync.question('Can you give me a number for the width of a rectangle?');
let length = readlineSync.question('Can you give me a number for the length of a rectangle?');
let Surface = calcSurface (length,width)//this uses the function created


console.log("The surface of your rectangle is " + Surface);
