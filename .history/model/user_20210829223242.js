const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required },
    firstname: { type: String, default: null },
    lastname: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
});

module.exports = mongoose.model("user", userSchema);