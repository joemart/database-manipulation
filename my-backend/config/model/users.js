module.exports = (mongoose, connection) => connection.model('User', 
new mongoose.Schema({
    name:String
}))