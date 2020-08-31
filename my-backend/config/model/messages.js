module.exports = (mongoose, connection) =>
     connection.model('Message', new mongoose.Schema({
        message:[String],
        user:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
}))