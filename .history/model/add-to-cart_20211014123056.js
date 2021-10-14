const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userId: { type: String, default: null },
    productId:{ty}
    products: {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true }
    },
    quantity: { type: String, default: null },
    order_no: { type: String, default: null },
    add_cart_to_order_status: { type: String, default: 0 },
},
    { timestamps: true }
);

var AddToCart = mongoose.model('add_to_carts', userSchema);
module.exports = AddToCart;