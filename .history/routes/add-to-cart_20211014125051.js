const router = require("express").Router()
var multer = require('multer');
var upload = multer();


const AddToCart = require('../model/add-to-cart');
const Product = require("../model/product");
router.post('/', upload.any(), async (req, res) => {
   try
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