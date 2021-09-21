require("dotenv").config();
// require("./config/database").connect();
const express = require("express");

const app = express();
const User = require("./model/user");

app.use(express.json());

// Logic goes here
app.get("/login", (req, res) => {
   console.log("test");
   res.se
});

module.exports = app;