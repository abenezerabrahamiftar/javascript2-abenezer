const button = document.getElementById('addsong')
let songlist = document.getElementById('songlist')
const songinput = document.getElementById('songinput')

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