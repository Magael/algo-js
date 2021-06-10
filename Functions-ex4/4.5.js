//Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.
const readlineSync = require("readline-sync");

function calcDistance(x,y){
    this.x = x;
    this.y = y;
    

    this.distanceTo = function (calcDistance)
    {
        var distance = Math.sqrt((Math.pow(calcDistance.x-this.x,2))+(Math.pow(calcDistance.y-this.y,2)))
        return distance;
    };
} // This function calculates the difference between 2 points.

var newCalc = new calcDistance (10,100);
var nextCalc = new calcDistance (20,25);

console.log(newCalc.distanceTo(nextCalc))