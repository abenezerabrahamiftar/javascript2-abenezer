let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const results = document.querySelector('#results');

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {
  results.innerHTML = items
    .map(({ name, id }) => {
      const isFavorite = favorites.includes(name);
      return `
        <article>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name}">
          <h2>${name}</h2>
          <button class="favorite-btn">${isFavorite ? 'Verwijder favoriet' : 'Favoriet'}</button>
        </article>
      `;
    })
    .join('');

  document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const name = items[i].name;

      if (favorites.includes(name)) {
        favorites = favorites.filter(fav => fav !== name);
      } else {
        favorites.push(name);
      }

      saveFavorites();
      showItems(items);
    });
  });
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(r => r.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
    allPokemon = data.results.map((pokemon, index) => ({ ...pokemon, id: index + 1 }));
    showItems(allPokemon);
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

document.querySelector('#show-all').addEventListener('click', () => {
  showItems(allPokemon);
});

document.querySelector('#show-favorites').addEventListener('click', () => {
  showItems(allPokemon.filter(pokemon => favorites.includes(pokemon.name)));
});