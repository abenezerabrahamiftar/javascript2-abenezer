let input = document.getElementById('input');
let output = document.getElementById('output');
let button = document.getElementById('button');

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input1');
let buttonCalc= document.getElementById('btncalc');
let outputCalc = document.getElementById('outputcalc');


buttonCalc.addEventListener('click', function() {
outputCalc.textContent = calculator(input1.value, input2.value);

})


function calculator(a, b ){
    return a * b;
}

button.addEventListener('click', function() {
    console.log('geklikt');
    
    button.style.backgroundColor = 'green';
    
    output.textContent = input.value;

   output.style.color = 'green';

   input.value = '';


   
})



