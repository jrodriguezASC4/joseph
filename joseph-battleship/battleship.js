var timesClicked = 0;

var x = 0;//index x
var y = 0;//index y
var value = 0; //color
var sizeX = 400; // the width
var sizeY = 400; // the height
var boxes = 2; // amount of Boxes

var randomX = Math.floor(Math.random()*boxes)
var randomY = Math.floor(Math.random()*boxes)

function setup() {
    createCanvas(sizeX,sizeY);
    for(var row = 0; row < boxes; row++){ //getting the row
        for( var col = 0; col < boxes; col++){
            fill(255, 204, 0); //filling the boxes with the color
            rect( x, y, boxes*100, boxes*100);
            y+= boxes*100;
        }
        y =0;
        x+=boxes*100;
    }
    
}

function mousePressed() {
    if (mouseIsPressed)
    timesClicked += 1;
}

function mouseClicked() {
// turn the boxes that is not the ship into black
    if (mouseX < 200 && mouseY < 200){
        x = 0;
        y = 0;
        fill(value);
        rect( 0, 0, 200, 200);
    } else if (mouseX > 200 && mouseY < 200){
        x = 1;
        y = 0;  
       fill(value);
        rect( 200, 0, 200, 200);
    } else if (mouseX < 200 && mouseY > 200){
        x = 0;
        y = 1;
        fill(value);
        rect( 0, 200, 200, 200);
    } else if (mouseX > 200 && mouseY > 200){
        x = 1;
        y = 1;
        fill(value);
        rect( 200, 200, 200, 200);
    } 
//turns the box with the ship into another color
    if (x == randomX && y == randomY){
        fill('hsl(160, 100%, 50%)');
        rect(randomX * 200, randomY* 200, 200,200);
        alert("Win! You clicked " + timesClicked + " times, and took " + " seconds.")

   }
}

