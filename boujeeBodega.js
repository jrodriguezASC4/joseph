/* Welcome to Joseph's Boujee Bodega */
/* Where everything is $100 or more ;) */

/* In this person's hero adventure campaign
    the hero enters my bodega and has to spend
    all his money before continuing.
    He has to buy as much supplies as his money allows.
*/

// Allows to use prompt
var prompt = require('prompt-sync')();

var cat = "CoolCat247";
var money = 1000;
var name = prompt("What's your name? ");

// var i = 0                             Output numbers 0-9
// while (i < 10) {
//     console.log(i);                   Method #1
//     i++;
// }


// for (var i = 0; i < 10; i++) {
//     console.log(i);                   Method #2
// }

while (money > 0) {
    var item = prompt("What do you want to buy? ")
    console.log("You purchased the "+ item);
    money = money - 100; //In this case, everything is 100
}