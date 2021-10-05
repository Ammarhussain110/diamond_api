require("dotenv").config();
const mongoose = require('mongoose')
const express = require("express");

const app = express();
const User = require("./model/user");
const dotenv = require("dotenv")

// all routes links here
const router = require("./routes/routes");


dotenv.config();
const db = process.env.MONGO_URL
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successfully!!");
}).catch(err => {
    console.log();
    console.log("connection failed!!")
})

app.use(express.json());

app.use("/api", router)


module.exports = app;