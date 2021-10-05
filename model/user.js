const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstname: { type: String, default: null },
    lastname: { type: String, default: null },
    address: { type: String, default: null },
    phone: { type: String, default: null },
    role: { type: String, required: true },
    dp: { type: String, default: null },
},
    { timestamps: true }
);

var User = mongoose.model('users', userSchema);
module.exports = User;