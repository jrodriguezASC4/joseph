var mashArray = ["Final Destination", "Yoshi's Island", "Rainbow Road"];
var firstQuestion = ["1", "2", "3", "4"];
var secondQuestion = ["Dr. Mario", " King Dedede", " Yoshi", " Bowser"]

var prompt = require('prompt-sync')();

var randomStageNumber = Math.random(Math.floor) * 3;
var randomStage = randomStageNumber[""];

var strike = prompt("How many times will you strike? The minimum is once and, for balancing purposes, the maximum is four times: ");
var hitAnswer = strike[""];

var qFight = prompt("Who will you choose to fight? You can choose from " + secondQuestion + ": ");
var fightAnswer = qFight[""];

console.log("You fought " + fightAnswer + " in the " + randomStage + " and hit them " + hitAnswer + " times.")
console.log("Too bad. Mewtwo wins!")

var retry = prompt("Would you like to try again? y/n: ")
if (retry === y) {
    init();
} else {
    console.log("Peace brudda")
}
