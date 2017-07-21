var xIncrement = 3;
var yIncrement = 3; 
var xPlace = 650/2; //positon of ship on X axis
var yPlace = 650 - 100; //position of ship on Y axis
var xb = 650/2; //positon of bullet on X axis
var yb = 650 - 100; //positon of bullet on X axis
var row = 2;// two rows of enemies enemy
var col = 20; // 20 enemies for a row
var x = 0; //position for enemy (X-axis)
var y = 0; //position for enemy (Y-axis)

function setup(){ 
    createCanvas(650, 650); //create a black canvas
    background ('black');
}

function enemies(){ 
    // drawing enemies
    for(var i = 0; i < row; i++){ //getting the row
       for( var j = 0; j < col; j++){
            fill(255, 204, 0); //filling the boxes with the color
            rect( x + 25, y, 30, 30);
            x+=30;
        }
        x=0;
}
}

function movingBox(){ 
    // moves the box left
      if (keyIsDown(LEFT_ARROW)) {
    background ('black');
    rect(xPlace -= xIncrement, 550, 20, 50);
    enemies();
}
    // moving the box right
    if (keyIsDown (RIGHT_ARROW)) {
    background ('black');
    rect(xPlace += xIncrement, 550, 20, 50);
    enemies();
  }

  // Displays the player's X and Y position
fill(255,255,255);
textSize(30);
text("X: " + xPlace + "     Y: " + 550, 10, 640);

// Prevents the player from moving left out of the canvas
if (xPlace < 0) {
    xPlace = xPlace + xIncrement;
}

// Prevents the player from moving right out of the canvas
if (xPlace > 630) {
    xPlace = xPlace - xIncrement;
}
}

function shootingBullet(){ 
    if (keyCode === UP_ARROW) {
    background ('black');
    fill('red');
    rect(xb + 6, yb -= yIncrement*3, 5, 10);
    fill(255, 204, 0);
    rect(xPlace, 550, 20, 50);
    enemies(); 
    }
    if (yb < 0){ 
    yb = 550;
    rect(xb + 6, yb -= yIncrement*3, 5, 10);
    fill(255, 204, 0);
    rect(xPlace, 550, 20, 50);
  }
}

function draw() {
enemies();
rect(xPlace, 550, 20, 50);
movingBox();
shootingBullet();

}