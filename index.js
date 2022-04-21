const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// use middleware
app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://freshDale:freshDale123456@cluster0.vl9uy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('DB connect');

    // perform actions on the collection object
    client.close();
});



app.get('/', (req, res) => {
    res.send('Running my node crud server')
})

app.listen(port, () => {
    console.log('Server is Running')
})