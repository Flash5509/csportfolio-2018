    // variable continents
    var asia = document.getElementById("asia");
    var antarctica = document.getElementById("antarctica");
    var africa = document.getElementById("africa");
    var northa = document.getElementById("northa");
    var southa = document.getElementById("southa");
    var australia = document.getElementById("australia");
    var europe = document.getElementById("europe");
    
    //variable countries in asia
    var japan = document.getElementById("japan");
    var china = document.getElementById("china");
    var vietnam = document.getElementById("vietnam");
    var northk = document.getElementById("northk");
    var southk = document.getElementById("southk");
    var india = document.getElementById("india");
    var thailand = document.getElementById("thailand");
    
    //variable countries in North America
    var unitedstates = document.getElementById("unitedstates");
    var mexico = document.getElementById("mexico");
    var canada = document.getElementById("canada");
    var cuba = document.getElementById("cuba");
    var dominicanrepublic = document.getElementById("dominicanrepublic");
    var bahamas = document.getElementById("bahamas");
    var jamaica = document.getElementById("jamaica");
    
    var h3 = document.getElementById("h3");
    
    //asia countries display none
    japan.style.display = "block";
    japan.style.display = "none";
    
    china.style.display = "block";
    china.style.display = "none";
    
    vietnam.style.display = "block";
    vietnam.style.display = "none";
    
    northk.style.display = "block";
    northk.style.display = "none";
    
    southk.style.display = "block";
    southk.style.display = "none";
    
    india.style.display = "block";
    india.style.display = "none";
    
    thailand.style.display = "block";
    thailand.style.display = "none";
    
    //north america countries display none
    unitedstates.style.display = "block";
    unitedstates.style.display = "none";
    
    mexico.style.display = "block";
    mexico.style.display = "none";
    
    canada.style.display = "block";
    canada.style.display = "none";
    
    canada.style.display = "block";
    canada.style.display = "none";
    
    cuba.style.display = "block";
    cuba.style.display = "none";
    
    dominicanrepublic.style.display = "block";
    dominicanrepublic.style.display = "none";
    
    bahamas.style.display = "block";
    bahamas.style.display = "none";
    
    jamaica.style.display = "block";
    jamaica.style.display = "none";
    
    // North America show display when clicked
    northa.addEventListener("click", function(){
        unitedstates.style.display = "inline";
        mexico.style.display = "inline";
        canada.style.display = "inline";
        cuba.style.display = "inline";
        dominicanrepublic.style.display = "inline";
        bahamas.style.display = "inline";
        jamaica.style.display = "inline";
        
        //to disappear when north america countries are displayed
        japan.style.display = "block";
        japan.style.display = "none";
    
        china.style.display = "block";
        china.style.display = "none";
    
        vietnam.style.display = "block";
        vietnam.style.display = "none";
    
        northk.style.display = "block";
        northk.style.display = "none";
    
        southk.style.display = "block";
        southk.style.display = "none";
    
        india.style.display = "block";
        india.style.display = "none";
    
        thailand.style.display = "block";
        thailand.style.display = "none";
        
    });
    
    // Asia show display when clicked
    asia.addEventListener("click", function(){
        japan.style.display = "inline";
        china.style.display = "inline";
        vietnam.style.display = "inline";
        northk.style.display = "inline";
        southk.style.display = "inline";
        india.style.display = "inline";
        thailand.style.display = "inline";
        
        //to disappear when asia countries are displayed
        unitedstates.style.display = "block";
        unitedstates.style.display = "none";
    
        mexico.style.display = "block";
        mexico.style.display = "none";
    
        canada.style.display = "block";
        canada.style.display = "none";
    
        canada.style.display = "block";
        canada.style.display = "none";
    
        cuba.style.display = "block";
        cuba.style.display = "none";
    
        dominicanrepublic.style.display = "block";
        dominicanrepublic.style.display = "none";
    
        bahamas.style.display = "block";
        bahamas.style.display = "none";
    
        jamaica.style.display = "block";
        jamaica.style.display = "none";
        
        //inner html change
        h3.innerHTML = "Countries:"
    
    })