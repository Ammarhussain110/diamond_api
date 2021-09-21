const router = require("express").Router()

const User = require("../model/user")

router.post('/test', async (req, res) => {
    const user = req.body
    const data = new User({
        username: user.username,
        email: user.email,
        password: user.password,
    })
    data.save()
})

module.exports = router