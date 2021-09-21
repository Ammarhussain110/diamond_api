const express = require('express');
const router = express.Router();


router.post("/login", function (req, res, next) {
    const user = req.body
    // console.log(process.env.MONGO_URI);
    res.json({
        "name": user.name
    })
});

module.exports = router;