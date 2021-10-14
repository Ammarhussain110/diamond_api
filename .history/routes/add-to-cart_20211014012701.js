const router = require("express").Router()
var multer = require('multer');
var upload = multer();


const AddToCart = require('../model/add-to-cart')
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

module.exports = router