const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const usersList = document.querySelector('#users');
const filterAll = document.querySelector('#filter-all');
const filterAdmin = document.querySelector('#filter-admin');
const userForm = document.querySelector('#user-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const roleSelect = document.querySelector('#role');

const defaultUser = { active: true };

const showUsers = (users) => {
  usersList.innerHTML = '';

  for (const user of users) {
    const { name, email, role, active } = user;

    usersList.innerHTML += `
      <article>
        <h3>${name}</h3>
        <p>${email}</p>
        <p>Rol: ${role}</p>
        <p>${active ? 'Actief' : 'Niet actief'}</p>
      </article>
    `;
  }
};

const filterUsers = () => {
  let gefilterd = users;

  if (filter === 'admin') {
    gefilterd = users.filter(user => user.role === 'admin');
  }

  showUsers(gefilterd);
};

filterAdmin.addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

filterAll.addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newUser = {
    ...defaultUser,
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    role: roleSelect.value,
  };

  users.push(newUser);
  filterUsers();

  userForm.reset();
});

filterUsers();