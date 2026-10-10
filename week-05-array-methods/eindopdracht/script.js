
const products = [
  { name: 'Laptop Pro', price: 1299 },
  { name: 'Draadloze muis', price: 25 },
  { name: 'USB-C hub', price: 45 },
  { name: 'Bureaulamp', price: 30 },
  { name: 'Notitieboek', price: 8 },
  { name: 'Pennenset', price: 12 },
  { name: 'Koptelefoon', price: 89 },
  { name: 'Bluetooth speaker', price: 59 },
  { name: 'Webcam HD', price: 49 },
  { name: 'Muismat XL', price: 15 },
  { name: 'Monitor 27"', price: 249 },
  { name: 'Desk organizer', price: 22 },
];

const searchBar = document.querySelector('#search-bar');
const sortLow = document.querySelector('#sort-low');
const sortHigh = document.querySelector('#sort-high');
const productsList = document.querySelector('#products');
const counter = document.querySelector('#counter');

let searchTerm = '';
let sorting = '';

const showProducts = (list) => {
  productsList.innerHTML = '';

  for (const product of list) {
    productsList.innerHTML += `
      <article>
        <h3>${product.name}</h3>
        <p>€${product.price}</p>
      </article>
    `;
  }

  counter.textContent = `${list.length} producten`;
};

const filterProducts = () => {
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sorting === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sorting === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  showProducts(filtered);
};

searchBar.addEventListener('input', () => {
  searchTerm = searchBar.value;
  filterProducts();
});

sortLow.addEventListener('click', () => {
  sorting = 'low';
  filterProducts();
});

sortHigh.addEventListener('click', () => {
  sorting = 'high';
  filterProducts();
});

filterProducts();