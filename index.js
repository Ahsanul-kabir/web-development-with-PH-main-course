const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require(mongodb).ObjectId;
const app = express();
const port = process.env.PORT || 5000;


// use middleware
app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://freshDale:freshDale12345@cluster0.vl9uy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");

        // get users
        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })

        // POST User : Add a new User
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log('Adding uew user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })

        // delete user
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }

        })
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running my node crud server')
})

app.listen(port, () => {
    console.log('Server is Running')
})