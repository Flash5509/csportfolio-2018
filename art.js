/* global random mouseX fill stroke strokeWeight mouseY background text draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


//text position
var PosX = 8;


//variable for x axis for moon/sun
var x = 35;
var y = 330;


//image variable
var myImage;


//setup of image
setup = function(){
    myImage = loadImage("imgs/sunmoon.jpg");
}


//snow function to create the snow & has it fall
function Snow (x, y){
  this.x = x;
  this.y = y;
  this.draw = function(){
      strokeWeight(0)
      fill(255, 255, 255);
    ellipse(this.x, this.y, 10, 10);
    // triangle(30, 20, 30, 40, 20, 10);
  }
  this.fall = function(){
      this.y = this.y + 1;
  }
}


//drops array
var drops = [];
//variable for timer for less drops per frame
var timer = 0;


draw = function() {

    
    //timer increasing
    timer++;

    
    //conditional for timer so that drops fall depending on % frame.
    if(timer % 60 === 0){
        drops.push(new Snow(random(0, 400), 0));        
    }

    
    //condition for night and day background sky
    if (mouseX > 200){
        background(0, 51, 151)
    }

    else{
        background(153, 204, 255);
    }

    
    //rectangle move w/ mouse
    rect(mouseX-13, mouseY-13, 25, 25);
    
    
    //arc (earth)
    fill(0, 200, 10);
    stroke(0, 0, 0);
    arc(200, 530, 500, -400, 0, 7);
    
    
    // sun coming up and down.
    strokeWeight(2);
    fill(255, 255, 0);
    ellipse(x, y, 60, 60);

    
    //condition for sun movement
    if(x > 200){
        
        x = x + 1;
        y = y + 1;
    }
    
    else{
        x = x + 1;
        y = y - 1;
    }
    
    
    //text & image that runs on top of everything so that it is there
    fill(20, 20, 20);
    text("Sometimes I think of the sun and", PosX, 25);
    text("moon as lovers who rarely meet,", PosX, 40);
    text("always chase, and almost always", PosX, 55);
    text("miss one another.", PosX, 70);
    text("But once in a while,", PosX, 85);
    text("they do catch up, and they kiss", PosX, 100);
    text("and the world stares", PosX, 115);
    text("in awe of their eclipse.", PosX, 130);
    
    
    //creating of image sunmoon
    image(myImage, 195, 5);
    
    
    //loops for array to draw have snow fall
    for (var j = 0; j < drops.length; j++){
        drops[j].draw();
        drops[j].fall();
}

    
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
