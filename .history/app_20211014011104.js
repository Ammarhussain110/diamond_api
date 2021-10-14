require("dotenv").config();
const mongoose = require('mongoose')
const express = require("express");
var bodyParser = require('body-parser');

const app = express();
const dotenv = require("dotenv")

// all routes links here
const router = require("./routes/routes");
const product = require("./routes/product");
const user = require("./routes/user");


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
// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//form-urlencoded

// for parsing multipart/form-data

app.use(express.json());
app.use('/uploads/productImages', express.static('uploads/productImages'))
app.use('/uploads/profileImages', express.static('uploads/profileImages'))

app.use("/api", router)
app.use("/api/product", product)
app.use("/api/user", user)


module.exports = app;