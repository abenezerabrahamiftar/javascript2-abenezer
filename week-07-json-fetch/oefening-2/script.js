// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)

const films = document.querySelector('#films');

fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    for (const movie of movies) {
      films.innerHTML += `
        <article>
          <h3>${movie.title}</h3>
          <p>${movie.director} - ${movie.year} - ${movie.genre}</p>
        </article>
      `;
    }
  })
  .catch(error => console.error('Fout:', error));