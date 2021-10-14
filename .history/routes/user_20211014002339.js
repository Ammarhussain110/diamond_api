const router = require("express").Router()
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/profileImages',
    filename: (req, file, cb) => {
        return cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
});

const User = require('../model/user')
// update user
router.get('/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const data = await Product.findById(req.params.id)
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router