var xIncrement = 3;
var yIncrement = 3;
var xPlace = 650/2;
var yPlace = 650/2;
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
function shoot(){ 
      if ( keyIsDown (UP_ARROW)) {
      background ('black');
      rect(xPlace, yPlace -= yIncrement, 20, 50);
      enemies();
  } 
    if (yPlace == 0){ 
        yPlace == 650/2
    }
}
function draw() {
    enemies();
    rect(xPlace, 550, 20, 50);
    // moving the box left
  if (keyIsDown(LEFT_ARROW)) {
    background ('black');
    rect(xPlace -= xIncrement, 550, 20, 50);
    enemies();
}
    // moving the box right
  if ( keyIsDown (RIGHT_ARROW)) {
    background ('black');
    rect(xPlace += xIncrement, 550, 20, 50);
    enemies();
  }
  if ( keyIsDown (UP_ARROW)) {
      shoot();
  }

  textSize(30);
fill(255,255,255);
text("X: " + x + "     Y: " + y, 10, 640);

  return false; // prevent default

}