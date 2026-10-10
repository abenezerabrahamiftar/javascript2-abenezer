
// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted


const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

const resultFiltered = document.querySelector('#result-filtered');
const gefilterd = scores.filter(score => score > 50);

for (const score of gefilterd) {
  resultFiltered.innerHTML += `<li>${score}</li>`;
}

const resultMap = document.querySelector('#result-map');
const verdubbeld = scores.map(score => score * 2);

for (const score of verdubbeld) {
  resultMap.innerHTML += `<li>${score}</li>`;
}

const resultSorted = document.querySelector('#result-sorted');
const gesorteerd = scores.slice().sort((a, b) => a - b);

for (const score of gesorteerd) {
  resultSorted.innerHTML += `<li>${score}</li>`;
}