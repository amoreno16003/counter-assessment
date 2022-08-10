console.log("Hello");
let startOutput = 0;
let startInput = 1;
let result = 0;
const output = document.getElementById("header");
const input = document.getElementById("input");
const addBtn = document.getElementById("button1");
const subBtn = document.getElementById("button2");

output.textContent = startOutput;
input.textContent = startInput;


addBtn.addEventListener("click", function (){
    // startInput = parseInt(output.textContent);
    // startOutput = startOutput + startInput;
    // output.textContent = startOutput;
    result = parseInt(output.textContent) + parseInt(input.value);
    if (result < 0){
        output.style.color = "red";
    }
    else{
        output.style.color = "black";
    }
    output.textContent = result;
})

subBtn.addEventListener("click", function(){
    result = parseInt(output.textContent) - parseInt(input.value);
    if (result < 0){
        output.style.color = "red";
    }
    else{
        output.style.color = "black";
    }
    output.textContent = result;
})