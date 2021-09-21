var express = require('express');
var router = express.Router();


router.get("/login", function (req, res, next) {
    const user = req.body
  res.json({
      "name" : "ammar"
  })
});

module.exports = router;