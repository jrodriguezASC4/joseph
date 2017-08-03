function setup() {
    createCanvas(600,600);
    fill(random(255), random(255), random(255));
    rect(0,0,599,599);
}

function mouseMoved() {
  fill(mouseX/2, mouseY/2, 100);
    // stroke(mouseY, mouseX, (mouseX*mouseY)/2);
    noStroke();
    ellipse(mouseX, mouseY, mouseY, mouseX);
}

function mouseDragged() {
  fill(mouseX/2, mouseY/2, 100);
    // stroke(mouseY, mouseX, (mouseX*mouseY)/2);
    noStroke();
    ellipse(mouseX, mouseY, mouseY, mouseX);
}

// This code clears the canvas, and then runs the setup again to create a new color & rectangle to show the canvas
function mousePressed() {
  clear();
  setup();
}


