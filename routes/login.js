const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/khaatabook");

const userSchema = mongoose.Schema({
    email: String,
    password: String
})
module.exports = mongoose.model("user", userSchema);