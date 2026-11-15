// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
// Null-check: toon een melding als er nog niets opgeslagen is

const input = document.querySelector('#input');
const saveBtn = document.querySelector('#save');
const retrieveBtn = document.querySelector('#retrieve');
const result = document.querySelector('#result');

saveBtn.addEventListener('click', () => {
  localStorage.setItem('tekst', input.value);
  input.value = '';
});

retrieveBtn.addEventListener('click', () => {
  const saved = localStorage.getItem('tekst');

  if (saved === null) {
    result.textContent = 'Er is nog niets opgeslagen.';
  } else {
    result.textContent = saved;
  }
});