// function setup() {
//     createCanvas(500,500);
//     background(51);
//     ellipse(250,250,100);
// }

//     var xPos = 500;
//     var yPos = 500;
//     var xIncrement = 5;
//     var yIncrement = 3;
//     var xSize = 20
//     var ySize = 20

//     function draw() {
//         ellipse(xPos,yPos, xSize, ySize);
//         background(51);
//         if(xPos < 0 + (xSize/2) || xPos > 500) xIncrement = -xIncrement;
//         if(yPos < 0 + (ySize/2) || yPos > 500) yIncrement = -yIncrement;
//         xPos += xIncrement;
//         yPos += yIncrement;
       
// }

var randomRed = Math.floor(Math.random()*255)
var randomGreen= Math.floor(Math.random()*255)
var randomBlue = Math.floor(Math.random()*255)

// function setup() {
//     cnv = createCanvas(windowWidth, windowHeight)
//     background(randomRed,randomGreen,randomBlue)
// }

function setup() {
    cnv = createCanvas(windowWidth, windowHeight)
    for (var i=0; i<255; i++) {
    background(i/3, i/4, i/5);
    }
}

var x = 100
var y = 100
var s = 100
var xIncrement = 3
var yIncrement = 3
var colorIncrement = 5
var colorBase = 0

function draw() {
    //background(randomRed,randomGreen,randomBlue);
   
    // Constantly increase the color values until it reaches
    // 255, then reverse it.

     colorBase += colorIncrement

    if (colorBase >= 255 || colorBase <= 0) {
        colorIncrement = -colorIncrement
    }


    console.log(colorBase);
    fill(randomRed,randomGreen,randomBlue)
    rect(0,0,windowWidth,windowHeight);
    fill(colorBase*0.234, colorBase*0.546, colorBase);
    ellipse(x,y,s);

    x += xIncrement;
    y += yIncrement;

   if (x >= windowWidth - 75 || x <= 50){
        xIncrement = -xIncrement
    }
    if (y >= windowHeight - 75 || y <= 50){
        yIncrement = -yIncrement
    }
}