var inp;
// var wordsToPick = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var randomWord = wordsToPick[Math.floor(Math.random() * wordsToPick.length)];

// Helps with debugging
var wordsToPick = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var randomWord = wordsToPick[Math.floor(Math.random() * wordsToPick.length)];


// Generates random color values from 155 to 255
var randomX = Math.floor(Math.random()*100)+155;
var randomY = Math.floor(Math.random()*100)+155;
var randomZ = Math.floor(Math.random()*100)+155;

// // Generates a black background
// function setup () {
//     createCanvas(windowWidth,windowHeight);
//     background(0, 0, 0);

// Generates a background with a random color
function setup () {
    createCanvas(windowWidth,windowHeight);
    background(randomX, randomY, randomZ);

// Displays usually visible text at the top of the page
textSize(30);
fill(randomX/2, randomY/2, randomZ/2);
text("Type what you see:", 10, 30);

// Displays text a little lower + randomly colored
textSize(30);
fill(random(200), random(200), random(200));
text(randomWord, 10, 130);

// Just displays text that's blue-ish, no functionality
textSize(30);
fill(randomX/2, randomY/2, randomZ/2);
text("Your score: ", 10, 600);

// Creates a text box that a user can type in
inp = createInput('', "text");
inp.position(20, 180);
inp.size(400,90);

}

var youWin = "You win!"
var youLose = "Sorry, you lost..."
var score = 0

// This should match the background's random color and checks
// to see if the text matches the random word chosen.
function keyTyped() {
    var sample = randomWord;
    if (keyCode === ENTER) {
        if (inp.value() === sample) {
            fill(randomX, randomY, randomZ);
            noStroke();
            rect(10,340,600,100);

            textSize(30);
            textStyle(ITALIC);
            fill(0,random(100)+155,0);
            text(youWin,10,400);

            textSize(30);
            textStyle(ITALIC);
            fill(0,random(100)+155,0);

            score += 10;
            textStyle(NORMAL);
            fill(randomX, randomY, randomZ);
            noStroke();
            rect(180,540,150,100);
            textSize(50);
            fill(0, random(56)+200, 0);
            text(score, 180, 600);

        }
        else {
            fill(randomX, randomY, randomZ);
            noStroke();
            rect(10,340,600,100);

            textSize(30);
            fill(random(100)+155,0,0);
            text(youLose,10,400);

            score -= 10;
            textStyle(NORMAL);
            fill(randomX, randomY, randomZ);
            noStroke();
            rect(180,540,150,100);
            textSize(50);
            fill(0, random(56)+200, 0);
            text(score, 180, 600);\
        }
    }
}

// // This works only against a black background (0, 0, 0)
// function keyTyped() {
//     var sample = randomWord;
//     if (keyCode === ENTER) {
//         if (inp.value() === sample) {
//             fill(0,0,0);
//             rect(10,340,600,100);
//             textSize(30);
//             fill(0,random(100)+155,0);
//             text(youWin,10,400);
//         }
//         else {
//             fill(0,0,0);
//             rect(10,340,600,100);
//             textSize(30);
//             fill(random(100)+155,0,0);
//             text(youLose,10,400);
//         }
//     }
// }

