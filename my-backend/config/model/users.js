module.exports = (mongoose, connection) => connection.model('User', 
new mongoose.Schema({
    name:String,
    messages: {type:mongoose.Schema.Types.ObjectId, ref:"Message"}
}))