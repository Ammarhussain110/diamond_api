const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userId: { type: String, default: null },
    productId: { type: String, default: null },
    productId: { type: String, default: null },
},
    { timestamps: true }
);

var User = mongoose.model('users', userSchema);
module.exports = User;