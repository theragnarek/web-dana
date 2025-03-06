document.getElementById('loadUsersBtn').addEventListener('click', loadUsers);
document.getElementById('addUserBtn').addEventListener('click', addUser);

async function loadUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Ошибка загрузки пользователей');
        }
        const users = await response.json();
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `${user.name} <button onclick="deleteUser(${user.id}, this)">Удалить</button>`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error(error);
        alert('Не удалось загрузить пользователей');
    }
}

async function addUser() {
    const userName = document.getElementById('newUserName').value.trim();
    if (!userName) return alert('Введите имя пользователя');
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName })
        });
        if (!response.ok) {
            throw new Error('Ошибка при добавлении пользователя');
        }
        
        const newUser = await response.json();
        alert('Пользователь добавлен успешно!');
        document.getElementById('newUserName').value = '';
    } catch (error) {
        console.error(error);
        alert('Не удалось добавить пользователя');
    }
}

async function deleteUser(id, btn) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Ошибка при удалении пользователя');
        }
        btn.parentElement.remove();
    } catch (error) {
        console.error(error);
        alert('Не удалось удалить пользователя');
    }
}