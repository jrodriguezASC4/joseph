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

