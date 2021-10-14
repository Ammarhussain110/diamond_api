const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userId: { type: String, default: null },
    productId: { type: String, required:true },
    quantity: { type: String, default: null },
    order_no: { type: String, default: null },
    add_cart_to_order: { type: String, default: null },
},
    { timestamps: true }
);

var User = mongoose.model('users', userSchema);
module.exports = User;