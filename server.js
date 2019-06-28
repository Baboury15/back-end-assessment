
const express = require('express');
const app = express();
const birds = require('./bird-app/db/birds');

const PORT = process.env.PORT || 3001;

app.get('/', async (req, res) => {
   
    res.send("Hi")
})

app.get('/birds.json', async (req, res) => {
    res.json(birds)
})

app.get('/birds/:id.json', async (req, res) => {
    res.json(birds[req.params.id - 1])
})

app.listen(PORT, () => console.log("It's connecting..."));