const router = require("express").Router()
const multer = require('multer')

// const User = require("../model/user")
// const bcrypt = require('bcrypt');

// const jwt = require('jsonwebtoken');
const { register, login, getUser } = require('../api/controller/auth')

// register
router.post('/register', register)


// login 
router.post('/login', login)
router.get('/auth-user', getUser)
router.post('/test', multer.array(), async (req, res) => {
    console.log(req.body);
})



module.exports = router