require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();
const User = require("./model/user");

app.use(express.json());

// Logic goes here
app.post("/register", (req, res) => {
    // our register logic goes here...
    });

module.exports = app;