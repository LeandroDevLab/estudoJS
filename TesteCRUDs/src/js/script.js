const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const searchInput = document.getElementById('search');
const userList = document.getElementById('user-list');
const clearAllBtn = document.getElementById('clear-all');

let users = [];
let editingIndex = null;

// Carrega usuários salvos no localStorage ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('users');
  if (saved) {
    users = JSON.parse(saved);
    renderList();
  }
});

// Evento do formulário (salvar ou atualizar)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();

  // Validação: campos obrigatórios
  if (!name || !email) return;

  // Validação: e-mail duplicado
  const duplicate = users.find(
    (user, idx) => user.email === email && idx !== editingIndex
  );
  if (duplicate) {
    alert('Email já cadastrado!');
    return;
  }

  if (editingIndex === null) {
    // CREATE
    users.push({ name, email });
  } else {
    // UPDATE
    users[editingIndex] = { name, email };
    editingIndex = null;
  }

  form.reset();
  saveToLocalStorage();
  renderList();
});

// Renderiza a lista de usuários
function renderList(filter = '') {
  userList.innerHTML = '';

  // Filtrar por nome ou email
  const filtered = users
    .filter(
      user =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.email.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name)); // Ordenar por nome

  // Exibir cada usuário
  filtered.forEach((user, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${user.name}</strong> - ${user.email}
      <button class="edit" onclick="editUser(${index})">Editar</button>
      <button class="delete" onclick="deleteUser(${index})">Excluir</button>
    `;
    userList.appendChild(li);
  });
}

// Editar usuário
function editUser(index) {
  const user = users[index];
  nameInput.value = user.name;
  emailInput.value = user.email;
  editingIndex = index;
}

// Deletar usuário
function deleteUser(index) {
  if (confirm('Deseja excluir este usuário?')) {
    users.splice(index, 1);
    saveToLocalStorage();
    renderList(searchInput.value);
  }
}

// Salva no localStorage
function saveToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}

// Busca dinâmica enquanto digita
searchInput.addEventListener('input', () => {
  renderList(searchInput.value);
});

// Limpar todos os usuários
clearAllBtn.addEventListener('click', () => {
  if (confirm('Deseja excluir todos os usuários?')) {
    users = [];
    saveToLocalStorage();
    renderList();
  }
});
