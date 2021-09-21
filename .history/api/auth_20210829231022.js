var express = require('express');
var router = express.Router();


router.post("/login", function (req, res, next) {
    const user = req.body
  res.json({
      "name" : user.name
  })
});

module.exports = router;