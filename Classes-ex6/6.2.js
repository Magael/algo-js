//Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

const readlineSync = require("readline-sync");

class Rectangle{
    constructor(topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collide(otherRectangle){
        this.otherRectangle = Rectangle1;
    if
        (Rectangle1.topLeftXPos < Rectangle2.topLeftXPos + Rectangle2.width &&
        Rectangle1.topLeftXPos + Rectangle1.width > Rectangle2.topLeftXPos &&
        Rectangle1.topLeftYPos < Rectangle2.topLeftYPos + Rectangle2.length &&
        Rectangle1.length + Rectangle1.topLeftYPos > Rectangle2.topLeftYPos)
        {
               return true;
        }
    else{
        return false;
    }
}
}
const Rectangle1 = new Rectangle (9, 5, 8, 3);
const Rectangle2 = new Rectangle (6,5,8,3);
console.log(Rectangle2.collide(Rectangle1));