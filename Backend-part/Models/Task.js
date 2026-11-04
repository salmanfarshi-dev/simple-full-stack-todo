const mongoose = require("mongoose")

const { task } = mongoose

const taskSchema = new task({
    tittle:{
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model("todo", taskSchema)