let allPokemon = [];

const searchBar = document.querySelector('#search-bar');
const counter = document.querySelector('#counter');
const pokemonList = document.querySelector('#pokemon-list');

const showPokemon = (list) => {
  pokemonList.innerHTML = list
    .map(({ name, id }) => `
      <article>
        <h3>${name}</h3>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name}">
      </article>
    `)
    .join('');

  counter.textContent = `${list.length} Pokémon`;
};

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    allPokemon = data.results.map((pokemon, index) => ({ ...pokemon, id: index + 1 }));
    showPokemon(allPokemon);
  })
  .catch(error => console.error('Fout:', error));

searchBar.addEventListener('input', () => {
  const term = searchBar.value.toLowerCase();
  const filtered = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(term));
  showPokemon(filtered);
});