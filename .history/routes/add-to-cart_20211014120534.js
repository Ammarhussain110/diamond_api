const router = require("express").Router()
var multer = require('multer');
var upload = multer();


const AddToCart = require('../model/add-to-cart');
const Product = require("../model/product");
router.post('/', upload.any(), (req, res) => {
    const data = new AddToCart({
        productId: req.body.productId,
        quantity: req.body.quantity,
    })
    data
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Product add in cart successfully!!",
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    // res.json({ 'status': 'success', 'data': product })
})
// get all carts

router.get('/', async (req, res) => {
    try {
        const data = await AddToCart.find({}).sort({ _id: -1 })
        const product = await Product.find({
            '_id': { $in: [
                mongoose.Types.ObjectId('4ed3ede8844f0f351100000c'),
                mongoose.Types.ObjectId('4ed3f117a844e0471100000d'), 
                mongoose.Types.ObjectId('4ed3f18132f50c491100000e')
            ]}
        })
        console.log(data);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router