const router = require("express").Router()
const multer = require('multer');
const Product = require('../model/product')


const upload = multer({
   storage: storage
});

// store product

router.post('/', upload.single('image'), (req, res) => {
    console.log(req.file);
    // const product = new Product({
    //     name: req.body.name,
    //     price: req.body.price,
    //     image: req.file.path
    // })
    // res.json({ 'status': 'success', 'data': product })
})


module.exports = router