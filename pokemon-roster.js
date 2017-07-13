// Create an array with 6 additional nested arrays.
// Each nested array should have the folliwing items: 
// NAME, TYPE, HP, DEF, ATK, LEGEND (POKEDEX #)
// String, String, Number, Number, Number, Boolean, Number
// Then create a function that loops though the primary array
// and logs each of the 6 additional arrays to the console.

// The array holds all of the information the code will run through.
var primaryArray = [
    ["Weedle", "Bug & Poison", 40, 30, 35, false, 13],
    ["Arbok", "Poison", 60, 69, 85, false, 24],
    ["Raichu", "Electric", 60, 55, 90, false, 26],
    ["Moltres", "Fire & Flying", 90, 90, 100, true, 146],
    ["Kangaskhan", "Normal", 105, 80, 95, false, 115],
    ["Ditto", "Normal", 48, 48, 48, false, 132],
]

// This function loops through the array and logs each
// additional array to the console

var arrayLength = primaryArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(primaryArray[i]);
}

// List the stats of the first array

console.log(primaryArray[0][0] + " is a" + 
primaryArray[0][1] + 
" type whose HP is " + primaryArray[0][2]) + 
", defense is " + primaryArray[0][3] + 
", attack is " + primaryArray[0][4] +
", "
)


// User input to see if a certain Pokemon is in the roster
var prompt = require('prompt-sync')();
var qRoster = "What Pokemon would you like to see?";


