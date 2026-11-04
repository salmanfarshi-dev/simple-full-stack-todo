const express = require('express');
const cors = require("cors")
const app = express()
const port = 3000
const mongoose = require('mongoose');
require("dotenv").config()

// middle ware 

app.use(cors())
app.use(express.json())


// route 

app.get('/', (req, res) => {
  res.send('Todo Backend is running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


mongoose.connect('mongodb+srv://simpletodo:8QxkNJqUwxw90vCF@cluster0.jyqbbup.mongodb.net/Fullstack')
  .then(() => console.log('Connected!'));