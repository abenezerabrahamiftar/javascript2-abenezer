let message = "dit is een bericht";

let input = document.querySelector("#input");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    let inputvalue = input.value.trim();
    localStorage.setItem('input value', inputvalue);
});

let getitemfrom = localStorage.getItem('input value');
console.log(getitemfrom);