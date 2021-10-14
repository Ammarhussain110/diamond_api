const router = require("express").Router()
var multer = require('multer');
var upload = multer();


const AddToCart = require('../model/add-to-cart');
const Product = require("../model/product");
router.post('/', upload.any(), async (req, res) => {
    try {
        const checkProduct = await Product.findById(req.body.products.productId)
        const productCredentials = await Product.findOne({
            _id: req.body.products.productId,
            name: req.body.products.name,
            price: req.body.products.price,
            image: req.body.products.image
        })
        const checkCartEmpty = await AddToCart.find({
            productId: req.body.products.productId
        })
        // console.log(checkCartEmpty);
        if (productCredentials != null && checkProduct) {
            if (checkCartEmpty.length == 0) {
                const data = new AddToCart({
                    productId: req.body.products.productId,
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
        } else {
            res.status(500).json({
                status: "failed",
                error: "Product Not Available"
            });
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
router.get('/:id', async (req, res) => {
    try {
        const data = await AddToCart.findById(req.params.id)
        const singleProduct = await Product.findById(data.productId)
        // console.log(singleProduct);
        res.status(200).json({
            status: 'success',
            data, singleProduct
        })
    } catch (err) {
        res.status(500).json(err)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        await AddToCart.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            message: 'cart deleted successsfully!1'
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
        })
    }
})
module.exports = router