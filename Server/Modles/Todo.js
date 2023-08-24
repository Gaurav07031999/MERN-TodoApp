const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModle = mongoose.model("todos", TodoSchema)

module.exports = TodoModle