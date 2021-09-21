require("dotenv").config();
const mongoose = require('mongoose')
const express = require("express");

const app = express();
const User = require("./model/user");
const auth = require("./api/auth");
const dotenv = require("dotenv")

// all routes links are included here
const routes = require("./routes/routes")


dotenv.config();
const db = process.env.MONGO_URL
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successfully!!");
}).catch(err => {
    console.log("connection failed!!")
})

app.use(express.json());

// app.use("/", auth)
// app.get("/", function (req, res, next) {
//     res.send("hello!!")
// });

app.use()


// app.post("/register", function (req, res, next) {
//     const user = req.body
//     // console.log(process.env.MONGO_URI);
//     const data = new User({
//         username: user.username,
//         email: user.email,
//         password: user.password,
//     })
//     data.save()
//     res.json({
//         "name": data
//     })
// });

module.exports = app;