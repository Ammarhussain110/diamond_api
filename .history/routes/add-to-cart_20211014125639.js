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
        if (product) {
            if (checkCartEmpty.length == 0) {
                const data = new AddToCart({
                    productId: req.body.productId,
                    products: req.body.products,
                    quantity: req.body.quantity,
                })
                if (await data.save()) {
                    res.status(201).json({
                        status: "success",
                        message: "Product add in cart successfully!!",
                    });
                } else {
                    res.status(500).json({
                        status: "failed",
                        error: "Error occured adding cart"
                    });
                }
            } else {
                res.status(500).json({
                    status: "failed",
                    error: "Product already in a cart!!"
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error: "Product Not Available"
        });
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