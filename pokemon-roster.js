// Create an array with 6 additional nested arrays.
// Each nested array should have the folliwing items: 
// NAME, TYPE, HP, DEF, ATK, LEGEND (POKEDEX #)
// String, String, Number, Number, Number, Boolean, Number
// Then create a function that loops though the primary array
// and logs each of the 6 additional arrays to the console.

// The array holds all of the information the code will run through.
var p = [
    ["Weedle", "Bug & Poison", 40, 30, 35, false, 13],
    ["Arbok", "Poison", 60, 69, 85, false, 24],
    ["Raichu", "Electric", 60, 55, 90, false, 26],
    ["Moltres", "Fire & Flying", 90, 90, 100, true, 146],
    ["Kangaskhan", "Normal", 105, 80, 95, false, 115],
    ["Ditto", "Normal", 48, 48, 48, false, 132],
]

// This function loops through the array and logs each
// additional array to the console (Step #3)

console.log("Attempt #1:");

var arrayLength = p.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(p[i]);
}

console.log("");

// Step #4 - modify the loop to show the stats a bit more
// cleanly (Method 1)

console.log("Attempt #2");

var arrayLength = p.length;
for (var i = 0; i < arrayLength; i++) {
    console.log("Name: " + p[i][0]);
    console.log("Type: " + p[i][1]);
    console.log("HP: " + p[i][2]);
    console.log("DEF: " + p[i][3]);
    console.log("ATK: " + p[i][4]);
    console.log("LEGEND: " + p[i][5]);
    console.log("POKEDEX #: " + p[i][6]);
}

console.log ("");

// Step #4 - modify the loop to show the stats a bit more
// cleanly (Method 2)

console.log ("Attempt #3");

for (var i = 0; i < p.length; i++) {
    var line = "#  Name: " + p[i][0] + " ";
    line = line + ">TYPE: " + p[i][1] + " ";
    line = line + ">HP: " + p[i][2] + " ";
    line = line + ">DEF: " + p[i][3] + " ";
    line = line + ">ATK: " + p[i][4] + " ";
    line = line + ">LEGEND: " + p[i][5] + " ";
    line = line + ">POKEDEX #: " + p[i][6] + " ";
    console.log(line);
}

console.log("");

// List the stats of the first array

console.log("Attempt #4: ");

console.log(p[0][0] + " is a " + p[0][1] + 
" type whose HP is " + p[0][2] + 
", Defense is " + p[0][3] + 
", and attack is " + p[0][4] + "." +
" The fact that " + p[0][0] + 
" is legendary is " + p[0][5] + 
" and its PokeDex entry is number " + p[0][6]) +
"."

console.log("");

// User input to see if a certain Pokemon is in the roster
var prompt = require('prompt-sync')();
var qRoster = "What Pokemon would you like to see?";


