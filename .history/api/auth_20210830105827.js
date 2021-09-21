var express = require('express');
var router = express.Router();


router.post("/login", function (req, res, next) {
    const user = req.body
    console.log(process.env);
    res.json({
        "name": user.name
    })
});

module.exports = router;