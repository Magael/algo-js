//Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.
//Test its method and accessors by modifying the values and checking if everything is consistent.

const readlineSync = require("readline-sync");

class Circle{
    constructor(xPos,yPos,radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    moveBy(xOffset,yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface(){
    
        return Math.PI * this.radius * this.radius;
    }
}

const Circle1 = new Circle (2, 6, 9);
console.log (Circle1.surface);

