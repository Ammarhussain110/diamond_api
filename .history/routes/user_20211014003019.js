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
router.post('/:id', async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                firstname: req.body.firstname
            }, { new: true } })
res.status(200).json(data)
    } catch (err) {
    res.status(500).json(err)
}
})


module.exports = router