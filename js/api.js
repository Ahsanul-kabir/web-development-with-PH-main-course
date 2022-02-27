function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}
// loadPosts

function displayUsers(data) {
    // console.log(data[name]);
    // for (const user of data) {
    //     console.log(user.name);
    // }
    // or // data.map(user => console.log(user.name))

    const ul = document.getElementById('users');
    // console.log(data);
    for (const user of data) {
        // console.log(user);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}