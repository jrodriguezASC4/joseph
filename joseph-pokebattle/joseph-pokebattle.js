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
    rect(cpuX-70,cpuY-60, 150, 20);
    
    var charizard = [["Charizard"],["HP",400],["Blaze",50],["Solar Power",90]];
    var blastoise = [["Blastoise"],["HP",400],["Water Blast",80],["Hydro Pump",100]];

    textSize(20);
    fill(255,0,0);
    text(charizard[0][0], cpuX-43, cpuY - 75);

    textSize(15);
    fill(255,0,0);
    text(charizard[1][0] + ": ", cpuX - 190, cpuY - 45);



}


