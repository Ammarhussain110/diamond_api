const router = require("express").Router()
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: './uploads/productImages',
    filename: (req, file, cb) => {
        return cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
});

const Product = require('../model/product')
// store product

router.post('/', upload.single('image'), (req, res) => {
    // console.log(req.file);
    const product = new Product({
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

router.get('/', (req, res) => {
    try {
        Product
    } catch (err) {
        console.log(err);
    }
})

module.exports = router