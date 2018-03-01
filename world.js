var asia = document.getElementById("asia");
var antarctica = document.getElementById("antarctica");
var africa = document.getElementById("africa");
var northa = document.getElementById("northa");
var southa = document.getElementById("southa");
var australia = document.getElementById("australia");
var europe = document.getElementById("europe");

var japan = document.getElementById("japan");
var china = document.getElementById("china");
var vietnam = document.getElementById("vietnam");
var northk = document.getElementById("northk");
var southk = document.getElementById("southk");
var india = document.getElementById("india");
var thailand = document.getElementById("thailand");

japan.style.visibility = "hidden";
china.style.visibility = "hidden";
vietnam.style.visibility = "hidden";
northk.style.visibility = "hidden";
southk.style.visibility = "hidden";
india.style.visibility = "hidden";
thailand.style.visibility = "hidden";

northa.addEventListener("click", function(){
    northa.textContent = "United States";
    asia.textContent = "Mexico";
    africa.textContent = "Canada";
    europe.textContent = "Cuba";
    southa.textContent = "Dominican Republic";
    australia.textContent = "Bahamas";
    antarctica.textContent = "Jamaica";
    southa.style.visibility = "visible";

});

asia.addEventListener("click", function(){
    japan.style.visibility = "visible";
    china.style.visibility = "visible";
    vietnam.style.visibility = "visible";
    northk.style.visibility = "visible";
    southk.style.visibility = "visible";
    india.style.visibility = "visible";
    thailand.style.visibility = "visible";

})

antarctica.addEventListener("click", function(){
    asia.textContent = "Anarctica";
    africa.textContent = " ";
    antarctica.textContent = " ";
    europe.textContent = " ";
    northa.textContent = " ";
    southa.textContent = " ";
    australia.textContent = " ";
})

africa.addEventListener("click", function(){
    asia.textContent = "Egypt";
    africa.textContent = "Ethiopia";
    antarctica.textContent = "Liberia";
    europe.textContent = "Nigeria";
    northa.textContent = "Sudan";
    southa.textContent = "Morocco";
    australia.textContent = "Zimbabwe";
})

europe.addEventListener("click", function(){
    asia.textContent = "Belgium";
    africa.textContent = "France";
    antarctica.textContent = "Germany";
    europe.textContent = "Spain";
    northa.textContent = "Netherlands";
    southa.textContent = "Portugal";
    australia.textContent = "United Kingdom";
})

southa.addEventListener("click", function(){
    asia.textContent = "Argentina";
    africa.textContent = "Brazil";
    antarctica.textContent = "Chile";
    europe.textContent = "Peru";
    northa.textContent = "Paraguay";
    southa.textContent = "Uruguay";
    australia.textContent = "Venezuela";
})

australia.addEventListener("click", function(){
    asia.textContent = "Australia";
    africa.textContent = "Fiji";
    antarctica.textContent = "Palau";
    europe.textContent = "Micronesia";
    northa.textContent = "New Zealand";
    southa.textContent = "Samoa";
    australia.textContent = "Tonga";
})

