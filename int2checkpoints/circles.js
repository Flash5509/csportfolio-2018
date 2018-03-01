/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 2;
var xpos = 0;
var ypos = 200;
var xPOS = 200;
var yPOS = 0;

draw = function() {
    

    // draws the light blue circles diagonally from the top left to the bottom right corner
    fill(50, 200, 200);
    stroke(200, 200, 200);
    strokeWeight(weight);
    ellipse(xPos, yPos, 30, 30);
    xPos = xPos + 20;
    yPos = yPos + 20;
    weight++;
    
    // draws the dark blue circles diagonally from the top right to the bottom left corner
    fill(10, 100, 200);
    stroke(200, 200, 200);
    strokeWeight(weight);
    ellipse(xPos, height- yPos, 30, 30);
        
    // draws the light blue circles diagonally from the top left to the bottom right.
    fill(50, 200, 200);
    stroke(200, 200, 200);
    strokeWeight(weight);
    ellipse(xPos, yPos, 30, 30);
    
    // draws the green circles horizontally through the center
    fill(255, 255, 0);
    stroke(200, 200, 200);
    strokeWeight(weight);
    ellipse(xpos, ypos, 30, 30);
    xpos = xpos + 30;
    
    // draws the red circles vertically through the center
    fill(255, 0, 0);
    stroke(200, 200, 200);
    strokeWeight(weight);
    ellipse(xPOS, yPOS, 30, 30);
    yPOS = yPOS + 30;

};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
