require('dotenv').config({path:'../'})
const mongoose = require('mongoose')
const conn = process.env.MONGODB_URI
const connection = mongoose.createConnection(conn, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
})
.once('open', ()=>console.log('connected to DB'))

module.exports = connection

