const express = require('express');
const router = express.Router();
const User = require('../model/user')

router.post("/register", function (req, res, next) {
    const user = req.body
    // console.log(process.env.MONGO_URI);
    const data = new User({
        username: user.username,
        email: user.email,
        password: user.password,
    })
    data.save()
    res.json({
        "name": data
    })
});

module.exports = router;