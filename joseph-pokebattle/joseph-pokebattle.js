// This program is intended to be able to subtract health
// from the player's HP and CPU's HP and show the changes.
// The input should come from the user clicking at certain
// coordinates to output a move that will subtract HP
// depending on which one was chosen. When the HP changes,
// the text above the options should change to reflect the
// user's choice, and the HP should be updated without
// having any overlapping text.

function setup() {
    createCanvas(560,560);
    background(0,0,0);
    rect(20, 20, 520, 520); // Rectangle containing everything that happens
    rect(40,450,340,70);  // Box with the four moves
    rect(420,40,100,480); // Box with everything that has happened
    rect(40,380,340,70); // Box displaying what is currently happening

    fill (255,190,0);     // Orange/Yellow
    rect(40,450,170,35);  // Move #1
    
    fill(108,190,201);    // Light blue
    rect(210,450,170,35); // Move #2
    
    fill(189,20,183);     // Purple
    rect(40,485,170,35);  // Move #3
    
    fill(86,255,130);     // Light green
    rect(210,485,170,35); // Move #4

    var playerX = 110; // Stores player's X position in a variable
    var playerY = 330; // Stores player's Y position in a variable

    fill(0,0,0);                    // Black
    ellipse(playerX,playerY,55,55); // Draws the player

    fill(0,255,0);                         // Green
    rect(playerX-70, playerY-60, 150, 20); // Places a rectangle above the player, even when coords change

    var cpuX = 290; // Stores CPU's X position in a variable
    var cpuY = 130; // Stores CPU's Y position in a variable

    fill(255,0,0);
    ellipse(cpuX,cpuY,55,55); // Draws the CPU

    fill(0,255,0);
    rect(cpuX-70,cpuY-60, 150, 20); // Draws the CPU's HP
    
    var charizard = [["CHARIZARD"],["HP",400],["Blaze",20],["Solar Power",40]];
    var blastoise = [["BLASTOISE"],["HP",200],["Water Blast",80],["Hydro Pump",100]];

    // Displays "RESET" with a 90 degree rotation alongside the right side empty box

    textSize(90);
    fill(0,0,200);
    rotate(HALF_PI);
    text("RESET",130,-435);
    rotate(HALF_PI+HALF_PI+HALF_PI);
    
    // Displays Charizard's name above his HP meter and 'image', just a red circle
    textSize(20);
    fill(255,0,0);
    text(charizard[0][0], cpuX-43, cpuY - 75);

    // Displays Charizard's HP to the left of his meter.
    textSize(20);
    fill(255,0,0);
    text(charizard[1][0] + ": " + charizard[1][1], cpuX - 190, cpuY - 45);

    // Displays Blastoise's name above his HP meter
    textSize(20);
    fill(0,0,255);
    text(blastoise[0][0], playerX-43, playerY - 75);


    // Displays Blastoise's HP to the right of his meter
    textSize(20);
    fill(0,0,255);
    text(blastoise[1][0] + ": " + blastoise[1][1], playerX + 130, playerY - 43 );

    // Displays text prompting the user to pick a move
    textSize(22);
    fill(0,0,0);
    text("What will " + blastoise[0][0] + " do?", 50, 423);

    // Displays Blastoise's first move as text.
    textSize(20);
    fill(0,0,0);
    text(blastoise[2][0],65,475);

    // Displays Blastoise's second move as text.
    textSize(20);
    fill(0,0,0);
    text(blastoise[3][0],240,475);










}


