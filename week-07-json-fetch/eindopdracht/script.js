
let allArticles = [];

const articlesList = document.querySelector('#articles');

const showArticles = (articles) => {
  articlesList.innerHTML = articles
    .map(({ title, category, summary }) => `
      <article>
        <h3>${title}</h3>
        <p>${category}</p>
        <p>${summary}</p>
      </article>
    `)
    .join('');
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    allArticles = articles;
    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));

document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

document.querySelector('#filter-stad').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Stad'));
});

document.querySelector('#filter-technologie').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Technologie'));
});

document.querySelector('#filter-media').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Media'));
});
