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
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json({ "error": "Wrong username!!" })

        const hashPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SEC)
        const password = hashPassword.toString(CryptoJs.enc.Utf8)
        password !== req.body.password && res.status(401).json({ "error": "Wrong password!!" })
        res.status

    } catch (error) {
        res.status(500).json({ "err": err, "message": "Registration failed!!" })
    }
})


module.exports = router