const router = require("express").Router()
var multer = require('multer');
var upload = multer();


const AddToCart = require('../model/add-to-cart');
const Product = require("../model/product");
router.post('/', upload.any(), async (req, res) => {
    try {
        const product = await Product.findById(req.body.productId)
        const checkCartEmpty = await AddToCart.find({
            productId: req.body.productId
        })
        // console.log(checkCartEmpty.length == 0);
        console.log(product != '');
        // const data = new AddToCart({
        //     productId: req.body.productId,
        //     products: req.body.products,
        //     quantity: req.body.quantity,
        // })
        // if (await data.save()) {
        //     res.status(201).json({
        //         message: "Product add in cart successfully!!",
        //     });
        // } else {
        //     res.status(500).json({
        //         error: "Error occured adding cart"
        //     });
        // }
    } catch (error) {
        
    }
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