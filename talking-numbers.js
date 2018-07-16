var readline = require("readline-sync");

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/

function printGreeting() {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n");
  console.log("                       By: Antonio Farias");
  console.log("                                                                    ");
  console.log("                        Enjoy :-).\n");
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

}
/******************************************************************************
  This function takes a number between 1 and 9 (inclusive) as input and returns
  that same number in word form. If the number is not between 1 and 9, the
  function returns an empty string, which is just "".

  Examples:
  sayZeroNine(5) → "five"
  sayZeroNine(8) → "eight"
  sayZeroNine(13) → ""
*******************************************************************************/
function sayZeroNine(num) {
  if(num < 1 || num > 9) {
    return "";
  } else if (1 === num) {
    return "one";
  } else if (2 === num) {
    return "two";
  } else if (3 === num) {
    return "three";
  } else if (4 === num) {
    return "four";
  } else if (5 === num) {
    return "five";
  } else if (6 === num) {
    return "six";
  } else if (7 === num) {
    return "seven";
  } else if (8 === num) {
    return "eight";
  } else {
    return "nine";
  }
}
/******************************************************************************
  This function takes a number between 10 and 19 (inclusive) as input and returns
  that same number in word form. If the number is not between 10 and 19, the
  function returns an empty string, which is just "".

  Examples:
  sayTenNineteen(11) → "eleven"
  sayTenNineteen(15) → "fifteeen"
  sayTenNineteen(25) → ""
*******************************************************************************/
function sayTenNineteen(num) {
  if(num < 10 || num > 19) {
    return "";
  } else if (10 === num) {
    return "ten";
  } else if (11 === num) {
    return "eleven";
  } else if (12 === num) {
    return "twelve";
  } else if (13 === num) {
    return "thirteen";
  } else if (14 === num) {
    return "fourteen";
  } else if (15 === num) {
    return "fifteen";
  } else if (16 === num) {
    return "sixteen";
  } else if (17 === num) {
    return "seventeen";
  } else if (18 === num) {
    return "eightteen";
  } else {
    return "nineteen";
  }
}

/******************************************************************************
  This function takes a number between 2 and 9 (inclusive) as input and returns
  that same number in word form, but in the tens place. If the number is not
  between 2 and 9, the function returns an empty string, which is just "".

  Examples:
  sayTwentyNinety(5) → "fifty"
  sayTwentyNinety(8) → "eighty"
  sayTwentyNinety(1) → ""
*******************************************************************************/
function sayTwentyNinety(num) {
  if (num <= 1 || num >= 10) {
    return ""
  } else if (20 === num) {
    return "twenty";
  } else if (30 === num) {
    return "thirty";
  } else if (40 === num) {
    return "fourty";
  } else if (50 === num) {
    return "fifty";
  } else if (60 === num) {
    return "sixty"
  } else if (70 === num) {
    return "seventy";
  } else if (80 === num) {
    return "eighty";
  } else {
    return "ninety";
  }
}

/******************************************************************************
  This function calls the three functions above to convert an entire number (num)
  into word form, then returns that word. This function should be able to handle
  numbers from 0 to 9999 (inclusive).

  To do this, first declare a variable named wordForm at the top of the
  function. This will be the string you will return at the end of the function,
  so initialize it to an empty string at the start: var wordForm = "";

  Your first conditional statement should check if num is equal to 0. If so,
  set wordForm to the string "zero".

  Otherwise, build the word form of num by chopping num into thousands,
  hundreds, tens, and ones. Convert each place value number to a word by calling
  the three functions above, and concatenate each word with the wordForm variable.

  At the very end of your function it should simply return wordForm.

  Examples:
  sayNumber(0) → "zero"
  sayNumber(9999) → "nine-thousand nine-hundred ninety-nine"
  sayNumber(75) → "seventy-five"
*******************************************************************************/
function sayNumber(num) {
  let wordForm = "";
  if (num === 0) {
    wordForm = "zero";
  } else {
    let thousandsNum = Math.floor(num / 1000);
    let thousandsStringNum = sayZeroNine(thousandsNum) + "-thousand";
    let hundredsNum = Math.floor((num % 1000) / 100);
    let hundredsStringNum = sayZeroNine(hundredsNum) + "-hundred";
    let tensNum = Math.floor((num % 100) / 10);
    let tensStringsNum = sayTwentyNinety(tensNum);
    let onesNum = Math.floor(num % 10);
    let onesStringsNum = sayZeroNine(onesNum);

    if(thousandsNum > 0) {
      wordForm += thousandsStringNum + " ";
    }
    if(hundredsNum > 0) {
      wordForm += hundredsStringNum + " ";
    }
    if(tensNum !== 0) {
      wordForm += tensStringsNum + "-";
    }
    if(onesNum !== 0) {
      wordForm += onesStringsNum + " ";
    }
  }
  return wordForm;

}

/******************************************************************************
  This function simply runs your program. At the very least it should greet the
  user, ask the user to enter a number between 0 and 9999, then print that
  number in word form.
*******************************************************************************/
function run() {
  printGreeting();
  let enterNumber = Number(readline.question("Please enter any number between 0 to 9999: "));
  console.log("Word form: " + sayNumber(enterNumber));
}

// Run the program!
run();
