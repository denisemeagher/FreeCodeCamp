
//01 //* Setup  Read in the property values of testObj using dot notation.
Set the variable hatValue equal to the object property hat and set the
variable shirtValue equal to the object property shirt. */

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt; // Change this line


//02 /* The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in it, you will need to use bracket notation. */
//setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];   // Change this line


//03 /* Another use of bracket notation on objects is to use a variable to access a property. This can be very useful for iterating through lists of the object properties or for doing the lookup. */
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;                 // Change this Line
var player = testObj[playerNumber];   // Change this Line
