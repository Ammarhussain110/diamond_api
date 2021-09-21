require("dotenv").config();
const mongoose = require('mongoose')
const express = require("express");

const app = express();
const User = require("./model/user");
const auth = require("./api/auth");

const db = "mongodb+srv://test123:test@cluster0.jhnmb.mongodb.net/test123?retryWrites=true&w=majority"
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connection successfully!!");
}).catch(err => console.log("connection failed!!"))

app.use(express.json());

app.use("/", auth)

module.exports = app;