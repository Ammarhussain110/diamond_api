const mongoose = require("mongoose");

var dburl =  "mongodb+srv://diamond:<password>@diamond.psdtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dburl, { useNewUrlParser: true, useCreateIndex: true, }); var conn = mongoose.Collection;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String },
    firstname: { type: String, default: null },
    lastname: { type: String, default: null },
    address: { type: String, default: null },
    role: { type: String, default: null },
});

var User = mongoose.model('users', userSchema);
module.exports = User;