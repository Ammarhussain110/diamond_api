var express = require('express');
var router = express.Router();


router.get("/login", function (req, res, next) {
    const user = req.body
  res.json({
      "name" : body.name
  })
});

module.exports = router;