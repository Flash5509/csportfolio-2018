/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

/*global background*/
/*global random*/
/*global fill*/
/*global stroke*/

    //background so that it goes under the background
    background(150, 220 ,255);

draw = function() {
    
    //Rectangle random sizing and color
    for(var i = 0; i < width; i+=30){
             
            for(var j = 0; j < height; j+=30){
                rect(i, j, random(30), random(30));
                
            }
        }
        
        //Rectangle random sizings movement
        for(var i = 0; i < width; i+=30){
             
            for(var j = 0; j < height; j+=30){
                var size = random(30);
                rect(i, j, size, size);
                
            }
        }
    
    
        //Ellipse random sizings
        for(var i = 0; i < width; i+=30){
             
            for(var j = 0; j < height; j+=30){
                ellipse(i, j, random(30), random(30));
                
            }
        }
        
        //Ellipse random sizings movement
        for(var i = 0; i < width; i+=30){
             
            for(var j = 0; j < height; j+=30){
                var size = random(30);
                ellipse(i, j, size, size);
                
            }
        }
        
        //Ellipse w/ colors
        for(var i = 0; i < width; i+=30){
             
            for(var j = 0; j < height; j+=30){
                var size = random(30);
                fill(random(255), random(255), random(255));
                stroke(random(255), random(255), random(255));
                ellipse(i, j, size, size);
                
            }
        }
        
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

