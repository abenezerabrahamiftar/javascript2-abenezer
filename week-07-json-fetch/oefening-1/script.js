const booksList = document.querySelector('#books-list');

fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    for (const book of books) {
      booksList.innerHTML += `<li>${book.title} - ${book.author} (${book.year})</li>`;
    }
  })
  .catch(error => console.error('Fout:', error));