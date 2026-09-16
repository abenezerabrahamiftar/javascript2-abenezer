let amount = document.getElementById("amount")
let discount = document.getElementById("discount")
let button = document.getElementById("button")
let result = document.getElementById("result")


function berekenKorting(prijs, korting ) {
  return prijs - (prijs * korting / 100) 
}

button.addEventListener("click", function(e){
  e.preventDefault()
  result.textContent = berekenKorting(amount.value, discount.value)
})



