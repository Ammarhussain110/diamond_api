const router = require("express").Router()
const multer = require('multer');
const Product = require('../model/product')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// store product

router.post('/', upload.single('productImage'), (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.file.path
    })
    res.json({ 'status': 'success', 'data': product })
})


module.exports = router