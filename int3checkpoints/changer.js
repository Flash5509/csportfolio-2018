// Create Variables and saves Dom Elements
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

// Callback Function
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGColor.value;
})