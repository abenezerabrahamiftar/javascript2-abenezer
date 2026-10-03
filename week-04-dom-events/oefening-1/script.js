// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element


const button = document.getElementById('add')
let songlist = document.getElementById('list')
const songinput = document.getElementById('input')

button.addEventListener('click', () => {
  const input = songinput.value.trim();

  const lijst = document.createElement('li')
  lijst.textContent = input

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "verwijderen";

  lijst.appendChild(deleteButton)

  deleteButton.addEventListener('click', () => {
    lijst.remove()
  })

  songlist.appendChild(lijst)
  songinput.value = ""
})