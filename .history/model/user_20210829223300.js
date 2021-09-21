const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    firstname: { type: String, default: null },
    lastname: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    password: { type: String },
});

module.exports = mongoose.model("user", userSchema);