function setup() {
    createCanvas(600,600);
    fill(random(255), random(255), random(255));
    rect(0,0,599,599);
}

function mouseMoved() {
  fill(random(255),random(255),random(255)); // Generates a random color
  ellipse(mouseX, mouseY, 27, 27);           // Generates an ellipse based on the mouse's coordinates
  fill(random(255),random(255),random(255)); // Generates another random color
  rect(mouseX-50, mouseY-50, random(100), random(100)); // Generates a random-sized rectangle
    curve(random(100), random(100), random(100), random(100), 
    random(100), random(100), random(100), random(100)); // I don't even know, just look at the top left
  
  
}

// Generates a different set of shapes
function mouseDragged() {
    rect(mouseX-50, mouseY-50, random(100), random(100));
  ellipse(mouseX+5, mouseY+5, random(75), random(75));
  fill(random(255),random(255),random(255));
  triangle(random(100), random(100), random(100), random(100), random(100), random(100));

 
}

// This code clears the canvas, and then runs the setup again to create a new color & rectangle to show the canvas
function mousePressed() {
  clear();
  setup();
}


