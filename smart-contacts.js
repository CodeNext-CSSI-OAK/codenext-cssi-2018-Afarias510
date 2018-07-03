// Author: FirstName lastName

/******************************************************************************
                                constant variables

  These are global variables that should stay the same throughout the run of the
  program. After being initialized, JavaScript won't let you change them ever
  again. Great for when you want to "protect" certain variables from accidental
  tampering!
*******************************************************************************/

const READLINE = require("READLINE-sync");

/******************************************************************************
                                global variables

  contacts
  Object Array. Each object represents a contact. Contacts have four properties,
  and all property values are strings:
    -name: The contact's name. Can consist of any characters, spaces, etc.
    -number: The contact's 10-digit phone number (as a string).
    -email: The contact's email address.
    -notes: Any additional text relevant to the contact (e.g., "mobile number")

  quit
  Boolean. Represents if the program should continue running (true) or
  not (false).
*******************************************************************************/

var contacts, quit;

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/

function printGreeting() {

}

/******************************************************************************
                                  setupApp()

  Initialize global variables as follows:
  -contacts initialized as an empty array
  -quit initialized as false
*******************************************************************************/

function setup() {

}

/******************************************************************************
                                getNameInput()

  Continuously ask user to enter a name until a valid name is entered, then
  return that name.

  Valid names must be at least one character.
*******************************************************************************/

function getNameInput() {

}

/******************************************************************************
                                checkNumber()

  Check if a phone number is valid, according to the following criteria:
  -Phone numbers must be exactly 10 digits (no special characters, spaces, etc).
  -Phone numbers must have a value greater than 0.

  Return true if a phone number is valid, and false otherwise.

  Numbers will be passed in as strings, so use parseInt() to change them into
  number data types. From there you can perform all checks above.
*******************************************************************************/

function checkNumber(number) {

}

/******************************************************************************
                                getNumberInput()

  Continuously ask user to enter a phone number until a valid one is entered,
  then return it. Use checkNumber() to validate phone numbers.
*******************************************************************************/
function getNumberInput() {

}

/******************************************************************************
                                checkEmail()

  Check if an email address is valid, according to the following criteria:
  -Email addresses are optional, so they can be length 0. However, if the
   length of an email address is greater than 0, it needs to be validated,
   so the criteria below apply.
  -Email addresses must contain just one "@" symbol, but not as the first
   character.
  -Email addresses must end in ".com", ".org", ".net", or ".edu".

  Return true if an email address is valid, and false otherwise.
*******************************************************************************/

function checkEmail(email) {

}

/******************************************************************************
                                getEmailInput()

  Continuously ask user to enter an email address until a valid one is entered,
  then return it. Use checkEmail() to validate email addresses.
*******************************************************************************/

function getEmailInput() {

}

/******************************************************************************
                                compareContacts()

  Compares the names of two contacts, a and b, to determine their alphabetical
  order. If a's name comes before b's, return -1. If a's name comes after b's,
  return 1. If a's name does not come before or after b's, then they must share
  the same name, in which case you should return 0.

  To compare strings alphabetically, you can use comparison operators, just as
  you would with numbers. For example, "c" < "d" is true, while "c" > "d" is
  false.

  Note that a and b are passed in as objects, so you should access their name
  properties before comparing. Also before comparing, you should convert both
  names to lowercase or uppercase. This will make the comparison ignore
  capitalization, which is important for comparing strings alphabetically.
*******************************************************************************/

function compareContacts(a, b) {

}

/******************************************************************************
                                addContact()

  Ask user to enter values for a new contact. Then create a contact object
  with those values, add the object to the global contacts array, and sort
  the array according to the compareContacts() function. Finally, let the user
  know that the contact was added successfully.

  You should get the user's input for name, number, and email by calling the
  getNameInput(), getNumberInput(), and getEmailInput() functions, respectively.
  However, notes are optional and don't need to be validated.

  Sort the contacts array alphabetically by contact name using this code:
    contacts.sort(compareContacts)
*******************************************************************************/

function addContact() {

}

/******************************************************************************
                                getContactIndex()

  Seach the global contacts array for the first instance of a contact whose
  name matches contactName. Return the index of the first matching contact.
  If no match is found, return -1.

  Be sure to convert both comparison strings to lowercase or uppercase before
  comparing, to account for possible capitalization inconsistencies.
*******************************************************************************/

function getContactIndex(contactName) {

}

/******************************************************************************
                                removeContact()

  Attempt to remove a contact from the global contacts array.

  Ask the user to enter the contact's name, and search the contacts array for
  that contact by name (you have functions for both of these actions).

  If the contact isn't in the contact array, let the user know that you couldn't
  find it. Otherwise, remove the contact, and let the user know that this was
  done successfully.
*******************************************************************************/

function removeContact() {

}

/******************************************************************************
                                displayUpdateMenu()

  Display the contact update menu, with the following choices:
   1) Name
   2) Phone Number
   3) Email Address
   4) Notes
   0) Return to Main Menu

  Based on what the user chooses, update the appropriate value for the contact
  located at contactIndex. Call the necessary functions to get input for
  name, number, and email, while notes do not need any special validation. Also
  be sure to allow the user to quit this menu and return to the main menu
  by entering "0" (or anything else you want).

  Don't forget to re-sort the contacts array if the user updates any contact's
  name!
*******************************************************************************/

function displayUpdateMenu(contactIndex) {

}

/******************************************************************************
                                updateContact()

  Ask the user to enter the contact's name, and search the contacts array for
  that contact by name (you have functions for both of these actions).

  If the contact isn't in the contact array, let the user know that you couldn't
  find it. Otherwise, call displayContactMenu() with the contact's index passed
  to it as an argument.
*******************************************************************************/

function updateContact() {

}

/******************************************************************************
                                printContactInfo()

  Print current values for all four properties of a given contact. You'll first
  need to get the index of the contact based on contactName, which is passed in
  as input.
*******************************************************************************/

function printContactInfo(contactName) {

}

/******************************************************************************
                                searchContact()

  Print the info of all contacts whose names start with what the user types in.

  Ask the user to enter a name, and search the contacts list for any names that
  start with whatever string user typed in. If there are any matches, print them
  all. Otherwise let the user know that no matches were found.

  For example, let's say there is a contact named "Barack" and another named
  "Barry". If the user searches for "ba", both contacts' info should be printed.
*******************************************************************************/

function searchContact() {

}

/******************************************************************************
                                printAllContacts()

  Print the info of every contact in the contacts array. You already have a
  function that prints the info for one contact, so this should be very
  straightforward.
*******************************************************************************/

function printAllContacts() {

}

/******************************************************************************
                                displayMainMenu()

  Display the main menu, with the following choices:
   1) Add Contact
   2) Remove Contact
   3) Update Contact
   4) Search Contact
   5) Print All Contacts
   0) Quit

  Based on what the user chooses, call the appropriate function. However, if
  the user chooses options 2 through 5 and they don't have any contacts, let
  them know and do nothing else (no point in wasting their time).

  If the user enters "0" (or anything else you want), set quit to true, which
  will prevent this function from running again in the run() loop.
*******************************************************************************/

function displayMainMenu() {

}

/******************************************************************************
                                run()

  This is the "main" function that runs the entire program. Here's what it needs
  to do, in order:
    1) Print a greeting.
    2) Setup global variables.
    3) While the global variable quit is set to false, display the main menu in
       an endless loop.
    4) Outside of the loop, print a goodbye message.
*******************************************************************************/

function run() {

}

// Run the program!
run();
