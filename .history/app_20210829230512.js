require("dotenv").config();
// require("./config/database").connect();
const express = require("express");

const app = express();
const User = require("./model/user");

app.use(express.json());

// Logic goes here
// app.post("/login", (req, res) => {
//     const user = req.body
//     res.json({
//         "check": user.name
//     });
// });
app.use("/")

module.exports = app;