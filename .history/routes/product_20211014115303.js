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
        const data = await Product.findAll({
            where: {
                id: [46128, 2865, 49569, 1488, 45600, 61991, 1418, 61919, 53326, 61680]
            },
            // Add order conditions here....
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ],
            attributes: ['id', 'logo_version', 'logo_content_type', 'name', 'updated_at']
        });
    };
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

module.exports = router