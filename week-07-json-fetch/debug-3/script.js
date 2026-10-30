

// Fout gevonden: meerdere fouten: <script>-regel ontbrak in de HTML, fetch('./users') had geen .json, '#result' moest '#results' zijn, list.appendChild(list) moest list.appendChild(li) zijn, en in het json-bestand ontbraken komma's tussen de objecten
// Oplossing: alles aangepast zoals hierboven

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));