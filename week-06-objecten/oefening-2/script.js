const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

// 1. Originele lijst tonen (alleen naam en stad, met destructuring)
const origineel = document.querySelector('#origineel');

origineel.innerHTML += people
  .map(({ name, city }) => `<p>${name} - ${city}</p>`)
  .join('');

// 2. Kopie maken met map en spread, stad wordt Den Haag
const kopiePeople = people.map(person => ({ ...person, city: 'Den Haag' }));

// 3. Kopie tonen in #kopie (ook met destructuring)
const kopie = document.querySelector('#kopie');

kopie.innerHTML += kopiePeople
  .map(({ name, city }) => `<p>${name} - ${city}</p>`)
  .join('');

