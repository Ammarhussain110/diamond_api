const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String },
    date: {
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model('users', userSchema);
module.exports = User;