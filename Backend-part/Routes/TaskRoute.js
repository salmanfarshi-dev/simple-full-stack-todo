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

// delete task

Route.delete("/delete/:id", async (req, res) => {

    const task = await Task.findByIdAndDelete(req.params.id)

    res.json({
        message: "Task deleted successfully"
    })
})

// update task

Route.put("/update/:id", async (req, res) => {

    const task = await Task.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title
        },
        { new: true }
    )

    res.json({
        message: "Task updated successfully",
        task: task
    })
})


module.exports = Route