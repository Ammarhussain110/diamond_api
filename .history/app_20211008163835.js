require("dotenv").config();
const mongoose = require('mongoose')
const express = require("express");

const app = express();
const User = require("./model/user");
const dotenv = require("dotenv")

// all routes links here
const router = require("./routes/routes");
const product = require("./routes/product");


dotenv.config();
const db = process.env.MONGO_URL
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successfully!!");
}).catch(err => {
    console.log(err);
    console.log("connection failed!!")
})

app.use(express.json());
app.use('/imag')

app.use("/api", router)
app.use("/api/product", product)


module.exports = app;