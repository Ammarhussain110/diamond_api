const router = require("express").Router()
var multer = require('multer');
var upload = multer();

// const User = require("../model/user")
// const bcrypt = require('bcrypt');

// const jwt = require('jsonwebtoken');
const { register, login, getUser } = require('../api/controller/auth')

// register
router.post('/register', register)


// login 
router.post('/login', login)
router.get('/auth-user', getUser)



module.exports = router