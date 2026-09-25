let getName = document.getElementById('showName')


// function showName(){
//     return "Mijn naam is: " + name
// }

const showName = () => {
    return `Mijn naam is: abenezer ${name} `

}

getName.textContent = showName("Abenezer") 

let fruits = ["Appel", "banaan", "perzik"]

// for(let i = 0; i < fruits.length; i++){
// console.log(fruits[i])
// }

for(let fruit of fruits){
    getName.innerHTML += fruit + "<br>";
}

 docent heeft net bij opdracht 2 dit gezegdr  

 title.classList.toggole('active');

 const p = document.createElement('p');

 p.textContent = 'ik voeg een paragraag toe';

 Selection.appendChild(p)
