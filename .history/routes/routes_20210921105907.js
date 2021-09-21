const router = require("express").Router()

router.post('/test', async (req, res) => {
    const user = req.body
    const data = new Use({
        username: user.username,
        email: user.email,
        password: user.password,
    })
    data.save()
})

module.exports = router