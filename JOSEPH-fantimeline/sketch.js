function setup() {
    createCanvas(600,600);
    fill('blue');
    rect(0,0,599,599);
}

var dotFollow = function() {
    background(255, 255, 255);
    fill('red');
    ellipse(mouseX, mouseY, 12, 12); 
    var coordY = Math.floor(mouseY);
    var coords = mouseX + ", " + coordY;
    textSize(15);
    text(coords,mouseX+5,mouseY-10);
    return;
};

draw = function() {
    noStroke();
    if (mouseX > 255) {
      mouseX -= mouseX/255
    }

    if (mouseY > 255) {
      mouseY -= mouseY/255
    }

    fill(mouseX, mouseY, (mouseX*mouseY)/2);
    ellipse(mouseY, mouseX, mouseX, mouseY);
    ellipse(mouseX,mouseY,mouseX,mouseY);
    rect(mouseX,mouseY,mouseX,mouseY);
    rect(mouseX,mouseY,mouseX,mouseY);
};



