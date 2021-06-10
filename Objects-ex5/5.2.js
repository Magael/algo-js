//Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.
//Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.

const readlineSync = require("readline-sync");
function shuffle(Cast1) {
    var currentIndex = Cast1.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [Cast1[currentIndex], Cast1[randomIndex]] = [
        Cast1[randomIndex], Cast1[currentIndex]];
    }
  
    return Cast1;
  }
 
function askTVSerie(){
    let Name = readlineSync.question('What is the name of your favorite Tv Series?');
    let Year = Number (readlineSync.question('Can you give me the production year?'));
    let Cast1
    
let Answer = {
    Name,
    Year,
    Cast:[]
    
};

do {
    Cast1 = readlineSync.question('can you give me the name of the cast members? Insert & to finish.');
    if (Cast1!=="&"){
        Answer.Cast.push(Cast1);
    }
} 
while (Cast1 != "&");{
    
}

return Answer;

    }
    
let Serie = askTVSerie();
console.log (JSON.stringify(Serie));
console.log(JSON.stringify(shuffle(Serie["Cast"])));


