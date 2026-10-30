// Fout gevonden: er stond een komma na het laatste object in products.json (trailing comma), dat is ongeldig JSON
// Oplossing: de komma na het laatste object verwijderd

fetch('./products.json')
  .then(r => r.json())
  .then(products => {
    const list = document.querySelector('#results');
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} — €${product.price}`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));