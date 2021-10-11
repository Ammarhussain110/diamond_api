const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    desc: { type: String, default: null },
    price: { type: String, default: require },
    discount: { type: String, default: null },
    size: { type: String, default: null },
    size: { type: String, default: null },
    image: { type: String, required: true },
},
    { timestamps: true }
);

var product = mongoose.model('products', userSchema);
module.exports = product;