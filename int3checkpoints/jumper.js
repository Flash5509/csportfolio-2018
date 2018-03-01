var jumper = document.getElementById("jumper");
var mine = document.getElementById("mine");
var happy = document.getElementById("happy");
var valentines = document.getElementById("valentines");
var day = document.getElementById("day");

jumper.style.position="absolute";
mine.style.position="absolute";
happy.style.position="absolute";
valentines.style.position="absolute";
day.style.position="absolute";

mine.addEventListener("mousemove", function(){
    mine.style.left = Math.random() * 300 + "px";
    mine.style.right = Math.random() * 300 + "px";
    mine.style.top = Math.random() * 300 + "px";
});

jumper.addEventListener("mousemove", function(){
    jumper.style.left = Math.random() * 300 + "px";
    jumper.style.right = Math.random() * 300 + "px";
    jumper.style.top = Math.random() * 300 + "px";
});

happy.addEventListener("mousemove", function(){
    happy.style.left = Math.random() * 200 + "px";
    happy.style.right = Math.random() * 200 + "px";
    happy.style.top = Math.random() * 200 + "px";
});

valentines.addEventListener("mousemove", function(){
    valentines.style.left = Math.random() * 250 + "px";
    valentines.style.right = Math.random() * 250 + "px";
    valentines.style.top = Math.random() * 250 + "px";
});

day.addEventListener("mousemove", function(){
    day.style.left = Math.random() * 150 + "px";
    day.style.right = Math.random() * 150 + "px";
    day.style.top = Math.random() * 150 + "px";
});

