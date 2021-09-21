const router = require("express").Router()

const User = require("../model/user")

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

    }
})

module.exports = router