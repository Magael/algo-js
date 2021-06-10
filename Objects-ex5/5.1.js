//Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:
//Name,Production year,Names of the cast members (there can be as much as the user want)
//That function must gather all the data in a single object and return it. The data structure must be elegant.
//Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

const readlineSync = require("readline-sync");

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
} while (Cast1 != "&");
    
return Answer;
   
}

let Serie = askTVSerie();
console.log(JSON.stringify(Serie));
