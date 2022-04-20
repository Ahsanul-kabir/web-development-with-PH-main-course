const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!!');
})

const users = [
    { id: 1, name: 'Sabana', email: 'Sabana@gmail.com', phone: '017888899' },
    { id: 2, name: 'Sabanor', email: 'Sabanor@gmail.com', phone: '017877899' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '017228899' },
    { id: 4, name: 'Sabila', email: 'Sabila@gmail.com', phone: '0178888555' },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    // console.log(req.params)
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id == id)
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening on port', port)
})
