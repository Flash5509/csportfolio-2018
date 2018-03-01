/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

/*global mouseX*/
/*global mouseY*/
/*global mouseClicked*/
/*global fill*/
/*global line*/
/*global drawFace*/
/*global background*/

//writes out function to run but doesn't actually create the face unless told to.
drawFace = function(x, y){
    
    //face
    fill(255, 255, 0);
    ellipse(x, y, 100, 100);
    //eye color and eyes
    fill(100, 100, 200);
    ellipse(x - 20, y - 10, 20, 20);
    ellipse(x + 20, y - 10, 20, 20);
    //lines for mouth and eyebrows
    line(x - 20, y + 30, x, y + 30);
    line(x - 35, y - 25, x - 10, y - 30);
    line(x + 8, y - 30, x + 35, y - 25);
    
}
mouseClicked = function(){
 
     //draws the face and puts it into position where the mouse is clicked
     drawFace(mouseX, mouseY);
    
}

background(200, 200, 200);
draw = function() {
    


};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
