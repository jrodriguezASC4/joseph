// My goal is to recreate an image of a PokeBall using only
// one huge function. It should be possible to do using only
// lines and ellipses, with the HALF_PI condition coming in
// handy for certain parts of the ball.


// Creates a PokeBall with the top half smoothly changing colors
function setup(PokeBall) {
    var multiplier = 2
    var rectSize = 499
    var canvasCenter = (Math.sqrt(2*(rectSize)*(rectSize)));
    console.log(canvasCenter)
    createCanvas(500,500);
    rect(0, 0, 499, 499);

    // // Outer circle black
    fill(0,0,0);
    ellipse(250,250,490,490);

    // // Upper semi-circle red
    fill(255,0,0);
    arc(250, 250, 430, 430, PI, 0);

    // // Lower semi-circle white
    fill(255,255,255);
    arc(250, 250, 430, 430, 0, PI);

    // //Inner circle black
    fill(0,0,0);
    ellipse(250,250,180,180);

    // //Inner circle white
    fill(255,255,255);
    ellipse(250,250,120,120);

    // //Tiniest circle black
    fill(0,0,0);
    ellipse(250,250,62,62);

    // //Left side rectangle black
    fill(0,0,0);
    rect(10,235,150,30);

    // //Right side rectangle black
    fill(0,0,0);
    rect(320,235,150,30);
}

// // Creates a Premiere Ball. Almost perfect, but the two red
// // horizontal stripes are on TOP of the outer black
// // circle. I just made the rectangles as small in width
// // as possible, and the issue is only noticable upon
// // close inspection.

// function setup(PremiereBall) {
//     createCanvas(500,500);
//     rect(0, 0, 499, 499);

//     // // Outer circle black
//     fill(0,0,0);
//     ellipse(250,250,490,490);

//     // // Upper semi-circle white
//     fill(255,255,255);
//     arc(250, 250, 430, 430, PI, 0);

//     // // Lower semi-circle white
//     fill(255,255,255);
//     arc(250, 250, 430, 430, 0, PI);

//     // //Inner circle red
//     noStroke();
//     fill(255,0,0);
//     ellipse(250,250,180,180);

//     // //Inner circle white
//     fill(255,255,255);
//     ellipse(250,250,120,120);

//     // Tinier circle grey
//     fill(255/2,255/2,255/2);
//     ellipse(250,250,88,88);

//     // Tiniest circle white
//     fill(255,255,255);
//     ellipse(250,250,76,76);

//     // //Left side rectangle red
//     fill(255,0,0);
//     rect(35,235,130,30);

//     // //Right side rectangle red
//     fill(255,0,0);
//     rect(320,235,145,30);
// }






// // Creates a normal PokeBall
// function setup() {
//     var multiplier = 2
//     var rectSize = 499
//     var canvasCenter = (Math.sqrt(2*(rectSize)*(rectSize)));
//     console.log(canvasCenter)
//     createCanvas(500,500);
//     rect(0, 0, 499, 499);

//     // // Outer circle black
//     fill(0,0,0);
//     ellipse(250,250,490,490);

//     // // Upper semi-circle red
//     fill(255,0,0);
//     arc(250, 250, 430, 430, PI, 0);

//     // // Lower semi-circle white
//     fill(255,255,255);
//     arc(250, 250, 430, 430, 0, PI);

//     // //Inner circle black
//     fill(0,0,0);
//     ellipse(250,250,180,180);

//     // //Inner circle white
//     fill(255,255,255);
//     ellipse(250,250,120,120);

//     // //Tiniest circle black
//     fill(0,0,0);
//     ellipse(250,250,62,62);

//     // //Left side rectangle black
//     fill(0,0,0);
//     rect(10,235,150,30);

//     // //Right side rectangle black
//     fill(0,0,0);
//     rect(320,235,150,30);
// }





