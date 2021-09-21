var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var userModel = require('../modules/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

