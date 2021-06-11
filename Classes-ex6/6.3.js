//Create a program that will re-use the Rectangle class you created previously. It should generate 1000 random instances of Rectangle with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.

const readlineSync = require("readline-sync");
let a = 1;
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
               console.log(true);
        }
    else{
        console.log(false);
    }   
}  
}
const Rectangle1 = new Rectangle (9, 5, 8, 3);
console.log(Rectangle1);
const Rectangle2 = new Rectangle (6,5,8,3);
console.log(Rectangle2);
console.log(Rectangle2.collide(Rectangle1));

while (a <= 1000){
    a = a + 1;
    Rectangle3 = new Rectangle(
        Math.floor(Math.random()*100)+1,
        Math.floor(Math.random()*100)+1,
        Math.floor(Math.random()*100)+1,
        Math.floor(Math.random()*100)+1
    );
    console.log(Rectangle3);
    Rectangle3.collide(Rectangle1);
    }





