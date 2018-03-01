/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


    /*global mouseX*/
    /*global mouseY*/
    /*global background*/
    /*global stroke*/
    /*global fill*/
    /*global strokeWeight*/
    
    var size = 30;
draw = function() {
    
    background(20, 200, 100);
    
    //creates the ellipse
    
    ellipse(mouseX, mouseY, size, size);
    
    //changes border color to red if x>200
    if (mouseX > 200){
        stroke(200, 20, 100);
        fill(10, 200, 150);
    
    }
    else{
        stroke(200, 100, 200);
        fill(100, 50, 25);
    }
    
    if (mouseY > 200){
        strokeWeight(3);
        fill(24, 103, 124);
    }
    
    else{
        strokeWeight(7);
        fill(26, 54, 191);
    }
    
    if (mouseY > 200){
        size = 40;
    }
    
    else{
        size = 20;
    }
}; 
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
