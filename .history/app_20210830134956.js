require("dotenv").config();
const mongoose = require('mongoose')
const express = require("express");

const app = express();
const User = require("./model/user");
const auth = require("./api/auth");

const db = "mongodb+srv://test:<password>@cluster0.jhnmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    
})

app.use(express.json());

app.use("/", auth)

module.exports = app;