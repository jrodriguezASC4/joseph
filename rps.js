var choices = ["rock", "paper", "scissors"];
// var player2 = ["rock", "paper", "scissors"];
/* Choices */

var randomChoice = Math.floor(Math.random() * 3) //Picks 0, 1, or 2
var p1Choice = choices[2]; // Scissors
var p2Choice = choices[randomChoice];

var tie = "It's a tie!";
var onew = "Player one wins!";
var onel = "Player one loses!";
var twow = "Player two wins!";
var twol = "Player two loses!";
var pr = "Paper beats rock.";
var sp = "Scissors beats paper.";
var rs = "Rock beats scissors.";

if ( p1Choice === p2Choice){
    console.log(tie);
} else if (p1Choice === choices[0]) {
    if (p2Choice === choices[1]) {
        console.log(onel, pr);
    } else {
        console.log(onew, rs);
    }
} else if (p1Choice === choices[1]) {
    if (p2Choice === choices[0]) {
        console.log(onew, pr);
    } else {
        console.log(onel, sp);
    }
} else if (p1Choice === choices[2]) {
    if (p2Choice === choices[0]) {
        console.log(onel, rs);
    } else {
        console.log(onew, sp);
    }
}


/*
if ( p1Choice === p2Choice ){
    console.log("It's a tie!");
} else if (p1Choice === "scissors") { // If p1 is scissors
    if (p2Choice === "rock") {
        console.log("Player one loses");
        console.log("Rock beats scissors");
    } else {
        console.log("Player one wins");
        console.log("Scissors beats paper");
    }
} else if (p1Choice === "rock") {
    if (p2Choice === "scissors") {
        console.log("Player one wins");
        console.log("Rock beats scissors");
    } else {
        console.log ("Player one loses");
        console.log ("Paper beats rock");
    }
} else if (p1Choice === "paper") {
    if (p2Choice === "scissors") {
        console.log("Player one loses");
        console.log("Scissors beats paper");
    } else {
        console.log("Player one wins");
        console.log("Paper beats rock");
    }}
*/
