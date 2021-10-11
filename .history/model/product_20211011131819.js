const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    userId: { type: String, default: null },
    desc: { type: String, default: null },
    price: { type: String, required: true },
    discount: { type: String, default: null },
    size: { type: String, default: null },
    shapes: { type: Str, default: null },
    image: { type: String, required: true },
},
    { timestamps: true }
);

var product = mongoose.model('products', userSchema);
module.exports = product;