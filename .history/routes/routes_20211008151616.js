const router = require("express").Router()

// const User = require("../model/user")
// const bcrypt = require('bcrypt');

// const jwt = require('jsonwebtoken');
const { register, login, getUser } = require('../api/controller/auth')
const {} = require('../')

// register
router.post('/register', register)


// login 
router.post('/login', login)
router.get('/auth-user', getUser)

// all products routes
router.route('/product').get(index).post(store)


module.exports = router