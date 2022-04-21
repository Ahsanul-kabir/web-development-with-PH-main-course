const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json())

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
    // console.log('query', req.query);
    // filer by search query
    //
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    res.send(users)
})

// app.get('/users', (req, res) => {
//     res.send(users)
// })

app.get('/users/:id', (req, res) => {
    // console.log(req.params)
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id == id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);

    res.send('post method success')
})

app.get('fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange'])
})

app.get('fruits/mango/fazle', (req, res) => {
    res.send('sour sour mongo flavor')
})

app.listen(port, () => {
    console.log('Listening on port', port)
})
