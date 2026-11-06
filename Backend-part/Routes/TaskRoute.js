const express = require("express")
const Task = require("../Models/Task")
const Route = express.Router()


Route.post("/add", async (req, res) => {

    const task = await Task.create({
        title: req.body.title
    })

    res.json(task)

})

// get all task

Route.get("/all", async (req, res) => {

    const tasks = await Task.find()

    res.json(tasks)

})


module.exports = Route