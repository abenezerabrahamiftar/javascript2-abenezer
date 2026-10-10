
const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];


// ---------- Sectie 1: find + startsWith + toLowerCase ----------
const searchFind = document.querySelector('#search-find');
const outputFind = document.querySelector('#output-find');

searchFind.addEventListener('input', () => {
  const letter = searchFind.value.toLowerCase();
  const gevonden = names.find(name => name.toLowerCase().startsWith(letter));

  outputFind.textContent = gevonden;
  searchFind.value = '';
});

// ---------- Sectie 2: includes + toLowerCase ----------
const searchIncludes = document.querySelector('#search-includes');
const outputIncludes = document.querySelector('#output-includes');

searchIncludes.addEventListener('change', () => {
  const naam = searchIncludes.value.toLowerCase();
  const kleineNamen = names.map(name => name.toLowerCase());

  outputIncludes.textContent = kleineNamen.includes(naam);
  searchIncludes.value = '';
});