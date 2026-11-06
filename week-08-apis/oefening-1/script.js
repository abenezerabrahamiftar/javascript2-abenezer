const characters = document.querySelector('#characters');

fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    characters.innerHTML = data.results
      .map(({ name, image }) => `
        <article>
          <h3>${name}</h3>
          <img src="${image}" alt="${name}">
        </article>
      `)
      .join('');
  })
  .catch(error => console.error('Fout:', error));