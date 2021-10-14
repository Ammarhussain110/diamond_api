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
router.post('/:id', upload.single('dp'), async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                address: req.body.address,
                phone: req.body.phone,
                dp: `profileImages/${req.file.filename}`
            }
        }, { new: true })
        res.status(200).json({
            status: "success",
            message: "Profile updated successfully!!"
        })
    } catch (err) {
        res.status(500).json({
            status: "success",
            message: "error occurred profile updated!!"
        })
    }
})


module.exports = router