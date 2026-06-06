const mongoose = require("mongoose");

// connection mongoose
mongoose.connect("mongodb://127.0.0.1:27017/testapp1")

// user Schema
const userSchema = mongoose.Schema({
    image : String, 
    email : String, 
    name : String
})

// creating model
module.exports = mongoose.model('user', userSchema);



