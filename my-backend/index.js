require('dotenv').config()
const express = require('express')
const app = express()
const connection = require('./config/model/models')
const User = connection.models.User
const Message = connection.models.Message

app.use(express.json())

app.get('/',(req,res)=>{

    res.send('hello')
})

app.post('/user',(req,res)=>{

    const user = req.body.user
    if(!user) return res.status(400).json({success:false, error:'no user'})
    User.create({name:user})
    .then(u=>{
        Message.create({user:u._id, message:[]})
        console.log('created user ' + u)
    })
    .catch(e=>console.log(e))
})

app.post('/message', (req,res)=>{
    const user = req.body.user
    const message = req.body.message

    if(!user) return res.status(400).json({success:false, error:'no user'})
    if(!message) return res.status(400).json({success:false, error:'no message'})
    
 
        Message.find()
        .populate({path:'user', match: {name:user}})
        .then(m=>console.log(m))
        .catch(e=>console.log(e))
  
    
})


app.listen(process.env.PORT)