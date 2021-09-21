var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

var checkAuth = require('../../middleware/auth');
var userModel = require('../../model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');