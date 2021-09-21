const mongoose = require("mongoose");

// var dburl = "mongodb+srv://diamond:diamond123@diamond.psdtk.mongodb.net/diamond?retryWrites=true&w=majority";

// mongoose.connect(dburl, { useNewUrlParser: true, useCreateIndex: true, }); var conn = mongoose.Collection;

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