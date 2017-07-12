// Declare an array with two Cool Nick entries to increase his odds
var people = ["Chris", "Will", "Edgar","Faisal", "CoolNick", "CoolNick"]

// Function to get random number
function getRandomWinner(index) {
    // Returns a random number
    return Math.floor(Math.random() * index);
}

// Prints out a random name based on the function
console.log(people[getRandomWinner(people.length)]);










/*

//I want to make a function that you can give a number
//as an input, and give me a random number, between 0 and that
//input. Give the function input 5, you will get a random
//from 0 to 5.

function coolNick(number) {
    //Want to use input as the range
    var randomNumber = Math.random() * number;
    var result = Math.floor(randomNumber);
    return result;
}

console.log(coolNick(10));

*/




/*
function welloHorld(){
    return "Wello Horld!";
    //console.log("Wello Horld!");
}

console.log(welloHorld());
*/

/*
function welloHorld(){
    console.log('\x1b[36m%s\x1b[0m', "You roll the dice and get a", '\x1b[33m%s\x1b[0m', Math.floor(Math.random()*7)), "\x1b[0m";
}

welloHorld();
*/