// Author: FirstName LastName
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by FirstName LastName");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse === "y" || enterHouse === "yes") {
let yes = readline.question(`A giant headless chicken appears      ,~.
   ,-'__ \`-,
  {,-'  \`. }              ,')
 ,( a )   \`-.__         ,',')~,
<=.) (         \`-.__,==' ' ' '}
  (   )                      /)
   \`-'\   ,                    )
       |  \        \`~.        /
       \   \`._        \      /
        \     \`._____,'    ,'
         \`-.             ,'
            \`-._     _,-'
                77jj'
               //_||
            __//--'/\`
          ,--'/\`  '
. What would you do?(punch, befriend or run away )`);
if(yes =="punch" || yes =="p" ){
  console.log("You aimed for the head.You then realized it has no head, You Died☠️");
  console.log("Thanks for playing!");
}
else{
  if(yes === "run away" || yes === "r"){
    console.log("You ran away from a chicken. What are you a coward??");
    console.log("Thanks for playing!");
  }
  else{
    if(yes === "befriend" || yes === "b"){
    console.log("The chicken has no friends only enemies❗️❗️🐓");
    console.log("Thanks for playing!");
  }
  }
}
} else {
  if (enterHouse !=="y" || enterHouse !=="yes") {
    console.log("What are you a chicken??🐓");
    console.log("Thanks for playing!");
  }

}
