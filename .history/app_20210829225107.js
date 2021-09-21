require("dotenv").config();
require("./config/database").connect();
const express = require("express");

var auth = require("./app/controller/auth")
const app = express();

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();
});

app.get('/', (req,res,next)=> {
    
});
// Logic goes here

module.exports = app;