const express = require('express');
const cors = require("cors")
const app = express()
const port = 3000


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