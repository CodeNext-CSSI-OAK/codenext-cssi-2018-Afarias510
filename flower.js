// Author: FirstName lastName

/******************************************************************************
                                constant variables

  These are global variables that should stay the same throughout the run of the
  program. After being initialized, JavaScript won't let you change them ever
  again. Great for when you want to "protect" certain variables from accidental
  tampering!
*******************************************************************************/

const READLINE = require("readline-sync");
const FLOWER_PICS = [
"  # # #\n" +
"  # O #\n" +
"  # # #\n" +
"    |  \n" +
"    |  \n",
"  # # #\n" +
"  # O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"  # # #\n" +
"    O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"    # #\n" +
"    O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"      #\n" +
"    O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"       \n" +
"    O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"       \n" +
"    O  \n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"       \n" +
"    O  \n" +
"    #  \n" +
"    |  \n" +
"    |  \n",
"       \n" +
"    x  \n" +
"    |  \n" +
"    |  \n" +
"    |  \n"
]
const WORDS = ("ant baboon badger bat bear beaver camel cat clam cobra cougar coyote " +
"crow deer dog donkey duck eagle ferret fox frog goat goose hawk lion lizard llama " +
"mole monkey moose mouse mule newt otter owl panda parrot pigeon python rabbit ram " +
"rat raven rhino salmon seal shark sheep skunk sloth snake spider stork swan tiger " +
"toad trout turkey turtle weasel whale wolf wombat zebra").split(" ");

/******************************************************************************
                                global variables

  missedLetters
  String Array. Each string is an individual letter the player has missed
  so far. Initialized as an empty array at the start of each game.

  correctLetters
  String Array. Each string is an individual letter the player has guessed
  correctly so far. Initialized as an empty array at the start of each game.

  secretWord
  String. This is the word the player has to guess! Initialized by
  getRandomWord().

  running
  Boolean. Represents if the program should continue running (true) or not
  (false).Initialized to true in setupGame(), can be changed in
  processGameOver();
*******************************************************************************/

var missedLetters, correctLetters, secretWord, running;

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/

function printGreeting() {

}

/******************************************************************************
                                  setupGame()

  Initialize global variables as follows:
  -missedLetters and correctLetters should be initialized as empty arrays.
  -secretWord should be initialized as a random string from the WORD constant.
  -running should be initialized to true.
*******************************************************************************/

function setupGame() {

}

/******************************************************************************
                                  printMissedLetters()

  Prints the string "Missed letters: ", along with all elements in missedLetters
  as a single string, with a space between each letter. For example, if
  missedLetters is ["a", "b", "c", "d"], this function prints "Missed letters:
  a b c d" on one line.
*******************************************************************************/

function printMissedLetters() {

}

/******************************************************************************
                              printCorrectLetters()

  Prints the string "Secret Word: ", along with whatever letters the player has
  guessed correctly, as a single string. The correct letters should appear where
  they normally do in the secret word. Letters the player has not yet guessed
  should appear as underscores ("blanks"). There should be a space between each
  letter or blank.

  For example, if the secret word is "google" and the player has guessed "o",
  this function prints "Correct letters: _ o o _ _ _".
*******************************************************************************/

function printCorrectLetters() {

}

/******************************************************************************
                                  printBoard()

  Prints the "board", which is the current flower pic, missed letters, and
  correct letters. The current flower pic is determined by how many letters the
  player has missed so far.
*******************************************************************************/
function printBoard() {

}

/******************************************************************************
                                  getRandomWord()

  Returns a random word from WORDS.

  The formula for generating a random integer is:
  Math.floor(Math.random() * (max - min + 1) + min)
*******************************************************************************/

function getRandomWord() {

}

/******************************************************************************
                                  getGuess()

  In an infinite loop, prompt the player to guess a letter. The program can exit
  the loop only if the player's guess is "valid", which means it passes all
  three of these conditions:
   1) The length of the guess must be exactly 1.
   2) The guess cannot be a letter they have already guessed (alreadyGuessed is
      an array passed into the function).
   3) The guess must be a letter in the English alphabet.

  Return the guess if it is valid. If a guess does not satisfy a condition,
  print a message communicating this to the player. For example, if the player
  enters "abc" or "", they have failed condition #1, so you should print
  something like, "Please guess one letter at a time.".

  Valid guesses should include both uppercase and lowercase letters. To make
  things easier on yourself, try setting the player's guess to all lowercase
  before validating it against the three conditions.
*******************************************************************************/

function getGuess(alreadyGuessed) {

}

/******************************************************************************
                                  processGuess()

  Get a player's guess by calling getGuess(). If the guess appears in the secret
  word, append that letter to correctLetters. Otherwise append it to
  missedLetters.

  Note that getGuess() has a parameter called alreadyGuessed, which prevents the
  player from guessing the same letter more than once. When calling getGuess(),
  you need to pass an array of guesses the user has already made, which is
  simply a concatenation of missedLetters and correctLetters arrays.

  You can concatenate arrays using the array.concat() method. For example:

  var array1 = ["a", "b", "c"];
  var array2 = ["d", "e", "f"];
  var array3 = array1.concat(array2);

  The value of array3 is ["a", "b", "c", "d", "e", "f"].
*******************************************************************************/

function processGuess() {

}

/******************************************************************************
                                  checkWinLose()

  Check if the player has won or lost, and call processGameOver() in either
  case. More details:
  -If they have won, print a congratulatory message, then call
   processGameOver().
  -Otherwise, if they have lost, print the board one last time. Then print a
   message telling them they have run out of guesses, along with another message
   telling them what the secret word was. Finally, call processGameOver().
  -If they have neither won nor lost, do nothing.

  To check for a win, you should see if each letter in the secretWord string is
  contained in the correctLetters array. You can do this with a for loop that
  passes through the length of secretWord, but exits the moment it finds a
  letter that isn't contained in correctLetters. This is the trickiest part of
  this project and requires you to think out of the box a bit (at least, if
  you want to do it the "neat" way).
*******************************************************************************/

function checkWinLose() {

}

/******************************************************************************
                                  processGameOver()

  Asks the player if they would like to play again. If they do, call setupGame()
  to reset the game's global variables. Otherwise set the global variable
  running to false and print a simple "Goodbye" message.
*******************************************************************************/

function processGameOver() {

}

/******************************************************************************
                                      run()

  The "mother function" of the program. Runs the game by doing the following:
  1) Print a greeting.
  2) Setup the game.
  3) In a loop that continues while the global variable running is true, do
     the following:
     A) Print the board.
     B) Process a guess.
     C) Check if the player has won or lost.
*******************************************************************************/

function run() {

}

// Run the program!
run();
