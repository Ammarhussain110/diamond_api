var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

var checkAuth = require('../../middleware/auth');
var userModel = require('../../model/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.get('login', function (req, res, next) {
    return "this is first code"
})