const router = require("express").Router()

router.post('/test', async (req, res) => {
    res.send("test!!!!!")
})

module.exports = router