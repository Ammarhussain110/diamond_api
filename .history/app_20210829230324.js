require("dotenv").config();
// require("./config/database").connect();
const express = require("express");

const app = express();
const User = require("./model/user");

app.use(express.json());

// Logic goes here
app.post("/login", (req, res) => {
    const user =     var username=req.body.username;


    res.json({
        "check": user
    });
});

module.exports = app;