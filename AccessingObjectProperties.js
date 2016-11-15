
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
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];   // Change this line
