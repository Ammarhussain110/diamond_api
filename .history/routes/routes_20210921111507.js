const router = require("express").Router()

const User = require("../model/user")
const CryptoJs = require("crypto-js")

// register
router.post('/register', async (req, res) => {
    try {
        const user = req.body
        const data = new User({
            username: user.username,
            email: user.email,
            password: CryptoJs.AES.encrypt(user.password, process.env.PASS_SEC)
        })
        await data.save()
    } catch (error) {
        res.status(500).json({ "message": "Registration failed!!" })
    }
})


// login 
router.post('/login', async (req, res) => {
    try {
        const data = await User.findOne({username: req.body.username})
        const hashPassword = CryptoJs.AES.decrypt(user.password, )
    } catch (error) {
        res.status(500).json({ "message": "Registration failed!!" })
    }
})


module.exports = router