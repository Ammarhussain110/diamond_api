const router = require("express").Router()
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: './uploads/productImages',
    filename: (req,file,cb)=>{
        return cb(null, `${re}`)
    }
})

const upload = multer({
    dest: './uploads/productImages'
});

const Product = require('../model/product')
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