require("dotenv").config();
const express = require("express");

const app = express();
const User = require("./model/user");
const auth = require("./api/auth");



app.use(express.json());

app.use("/", auth)

module.exports = app;