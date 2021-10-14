const router = require("express").Router()
var multer = require('multer');
var upload = multer();


const AddToCart = require('../model/add-to-cart');
const Product = require("../model/product");
router.post('/', upload.any(), async (req, res) => {
    const product = await Product.findById(req.body.productId)
    const checkCartEmpty = await AddToCart.findOne(req.body.productId)
    console.log(product);
    // const data = new AddToCart({
    //     productId: req.body.productId,
    //     products: req.body.products,
    //     quantity: req.body.quantity,
    // })
    // data
    //     .save()
    //     .then(result => {
    //         console.log(result);
    //         res.status(201).json({
    //             message: "Product add in cart successfully!!",
    //         });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             error: err
    //         });
    //     });
    // res.json({ 'status': 'success', 'data': product })
})
// get all carts

router.get('/', async (req, res) => {
    try {
        const data = await AddToCart.find({}).sort({ _id: -1 })
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router