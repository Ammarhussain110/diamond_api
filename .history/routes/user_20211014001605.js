const router = require("express").Router()
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/profile',
    filename: (req, file, cb) => {
        return cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
});

const User = require('../model/user')
// store product


module.exports = router