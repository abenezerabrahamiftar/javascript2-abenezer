const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const tasks = document.querySelector('#tasks');
const counter = document.querySelector('#counter');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taakTekst = input.value.trim();

  if (taakTekst === '') {
    return;
  }

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = taakTekst;

  const verwijderKnop = document.createElement('button');
  verwijderKnop.textContent = 'Verwijder';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(verwijderKnop);

  checkbox.addEventListener('click', () => {
    li.classList.toggle('afgevinkt');
  });

  verwijderKnop.addEventListener('click', () => {
    li.remove();
    counter.textContent = tasks.children.length + ' taken';
  });

  tasks.appendChild(li);

  counter.textContent = tasks.children.length + ' taken';
});