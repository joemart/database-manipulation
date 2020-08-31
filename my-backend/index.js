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
    Message.create({message:[]})
    .then(m=>
        User.create({name:user, messages:m._id})
        .then(u=>console.log(u))
        .catch(e=>console.log(e))
        ).catch(e=>console.log(e))
})

app.post('/message', async (req,res)=>{
    try{
        const user = await req.body.user
        const message = await req.body.message

        if(!user) return res.status(400).json({success:false, error:'no user'})
        if(!message) return res.status(400).json({success:false, error:'no message'})

        const u = await User.findOne({name:user})
        
        console.log(await Message.findByIdAndUpdate({_id:u.messages}, {$push:{message:message}}, {new:true}))

    
    }
    catch(e){
        console.log(e)
    }
   
})


app.listen(process.env.PORT)