const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModle = require('./Modles/Todo')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://gaurav96161559:Jj786786@test-db.z0jahtu.mongodb.net/?retryWrites=true&w=majority')

app.get('/get', (req, res)=>{
    TodoModle.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.put('/update/:id', (req, res)=>{
    const {id} = req.params;
    TodoModle.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.delete('/delete/:id', (req, res)=>{
    const {id} = req.params;
    TodoModle.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res)=>{
    const task = req.body.task;
    TodoModle.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))

})

app.listen(3001, ()=>{
    console.log("Server is Running");
})