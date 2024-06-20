const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/khaatabook");

const userSchema = mongoose.Schema({
    email: {
        type : String,
        unique: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    }
})
module.exports = mongoose.model("user", userSchema);