var sun = document.getElementById("sun");
var moon = document.getElementById("moon");
var eclipse = document.getElementById("eclipse");
var images = document.getElementById("images");

sun.addEventListener("click", function(){
   images.innerHTML = "<p>The sun has always been a great sourse of light and energy for the Earth. If the sun disappears the moon would not have light to reflect onto the Earth. The sun and moon have a nice relationship with one another. Sometimes though, they come together.</p>"
});

moon.addEventListener("click", function(){
    images.innerHTML = "<p>The moon has also been very kind and useful to Earth. At night in the dark, the moon lights up the sky using the sun's light. Oftentimes, they miss each other and don't get the chance to meet. But once in a while, they meet up and the world stares in awe.</p>"
});

eclipse.addEventListener("click", function(){
    images.innerHTML = "<p>Once in a while, the sun and moon come together and pass by one another causing an eclipse. During this time, the moon covers the sun and it is so very beautiful. Breathtaking even. The world becomes dark as the moon blocks the light from the sun from reaching Earth.</p>"
})