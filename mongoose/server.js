var express = require('express')
var bodyParser = require('body-parser')
var { mongoose } = require('./mongoose')
var { User } = require('./User')

var app = express();

app.use(bodyParser.json())

app.post('/users',(req,res)=>{
    var newUser = new User({
        name : req.body.name
    })
    
    newUser.save().then((doc)=>{
        res.send(doc)
    },(err)=>{
        res.status(400).send(err)
    })
    
})

app.get('/users',(req,res)=>{
    User.find().then((todos)=>{
        res.send({todos})
    },(e)=>{
        res.status(400).send(e)
    })
})



app.listen(8000,()=>{
    console.log('Server is started')
})