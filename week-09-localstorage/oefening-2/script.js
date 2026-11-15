

// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
// Stap 3: toon het resultaat van beide methoden op de pagina

const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

const zonderJson = document.querySelector('#zonder-json');
const metJson = document.querySelector('#met-json');

// Stap 1: zonder JSON.stringify
localStorage.setItem('user-fout', user);
const fout = localStorage.getItem('user-fout');

// Stap 2: met JSON.stringify en JSON.parse
localStorage.setItem('user-goed', JSON.stringify(user));
const goed = JSON.parse(localStorage.getItem('user-goed'));

// Stap 3: tonen
zonderJson.innerHTML += `<p>${fout}</p><p>Naam: ${fout.name}</p>`;
metJson.innerHTML += `<p>Naam: ${goed.name}, leeftijd: ${goed.age}, stad: ${goed.city}</p>`;