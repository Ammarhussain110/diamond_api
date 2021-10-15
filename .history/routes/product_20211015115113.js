const router = require("express").Router()
const multer = require('multer');
const path = require('path');

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

router.get('/', async (req, res) => {
    try {
        const data = await Product.find({}).sort({ _id: -1 })
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const data = await Product.findById(req.params.id)
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

// upfdate product
router.post('/:id', upload.single('image'), async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, {
            $set: {
                image: req.file ? `profileImages/${req.file.filename}` : req.body.image
            }
        }, { new: true })
        res.status(200).json({
            status: "success",
            message: "Profile updated successfully!!"
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: "error occurred profile updated!!"
        })
    }
})

module.exports = router