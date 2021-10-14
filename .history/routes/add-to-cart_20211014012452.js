const router = require("express").Router()
var multer = require('multer');
var upload = multer();


const AddToCart = require('../model/add-to-cart')
router.post('/', upload.any(), (req, res) => {
    // console.log(req.file);
    const Add = new Product({
        name: req.body.name,
        price: req.body.price,
        shapes: req.body.shapes,
        image: `productImages/${req.file.filename}`
    })
    product
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Product created successfully!!",
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