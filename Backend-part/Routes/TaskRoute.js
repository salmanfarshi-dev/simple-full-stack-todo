const express = require("express")
const Task = require("../Models/Task")
const Route = express.Router()


Route.post("/add", async (req, res) => {

    const task = await Task.create({
        title: req.body.title
    })

    res.json(task)

})


module.exports = Route