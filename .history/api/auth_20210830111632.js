const express = require('express');
const router = express.Router();
const User = require('../model/user')

router.post("/login", function (req, res, next) {
    const user = req.body
    // console.log(process.env.MONGO_URI);
    const data = new 
    res.json({
        "name": user.name
    })
});

module.exports = router;