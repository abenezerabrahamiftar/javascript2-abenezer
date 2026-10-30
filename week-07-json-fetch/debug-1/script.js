// Fout was: de bestandsnaam in fetch was verkeerd (new.json in plaats van news.json), daardoor 404 Not Found
// Oplossing: de naam aangepast naar de echte bestandsnaam

fetch('./news.json')
  .then(r => r.json())
  .then(messages => {
    const list = document.querySelector('#results');
    messages.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message.title;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));