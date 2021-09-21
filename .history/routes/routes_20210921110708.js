const router = require("express").Router()

const User = require("../model/user")
const CryptoJs = require("")

router.post('/test', async (req, res) => {
    try {
        const user = req.body
        const data = new User({
            username: user.username,
            email: user.email,
            password: user.password,
        })
        data.save()
    } catch (error) {
        res.status(500).json({"message": "Registration failed!!"})
    }
})

module.exports = router