var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operator = document.getElementById("operator");
var calculate = document.getElementById("calculate");
var answer = document.getElementById("answer");

// event listener for click to state teh calculations of the #'s
calculate.addEventListener("click", function(){
    var number1 = +num1.value;
    var number2 = +num2.value;
    var op = operator.value;
    
    
// if statements to calculate the #'s
    if(op === "+"){
        answer.innerHTML = number1 + number2;
    }
    
    if(op === "-"){
        answer.innerHTML = number1 - number2;
    }
    
    if(op === "*"){
        answer.innerHTML = number1 * number2;
    }
    
    if(op === "/"){
        answer.innerHTML = number1 / number2;
    }
    
    if(op === "^"){
        answer.innerHTML = number1 ** number2;
    }
    
    if(op ==="√"){
        answer.innerHTML = number1 ** (1/number2);
    }
});
