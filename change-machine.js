// Author Antonio Farias
let centsAsAString = "54";
console.log("your change is " + centsAsAString);
let centAsANumber = Number(centsAsAString);
let quarters = Math.floor(centAsANumber/25);
console.log("quarters:" + quarters);

let dimes = Math.floor(centAsANumber % 2);
console.log("dimes: " + dimes);
let nickels = Math.floor(centAsANumber % 2);
console.log("nickels: " + nickels);
let pennies = Math.floor(centAsANumber % 5);
console.log("Penny/ies: " + pennies);
