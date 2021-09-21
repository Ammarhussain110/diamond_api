const router = require("express").Router()

router.post('/test', as (req, res) => {
    res.send("test!!!!!")
})

module.exports = router