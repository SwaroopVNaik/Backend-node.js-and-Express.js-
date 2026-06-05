const mongoose = require('mongoose')

// Connection 
mongoose.connect('mongodb://127.0.0.1:27017/mongopractice');

// Creating Schema
const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String
});

// Creating Model
// exports is a property
module.exports =  mongoose.model("user", userSchema);