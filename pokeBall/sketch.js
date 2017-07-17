function setup() {
    createCanvas(1000,1000);
    fill(10,100,0);
    ellipse(200,200,200,200, 0, HALF_PI); // Outer ring
    fill(255,0,0);
    ellipse(200,200,90,90); // Inner ring
    arc(50, 50, 80, 80, 0, HALF_PI);
}