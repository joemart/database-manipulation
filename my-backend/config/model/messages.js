module.exports = (mongoose, connection) =>
     connection.model('Message', new mongoose.Schema({
        message:[String]
}))