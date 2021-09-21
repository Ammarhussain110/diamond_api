const router = require("express").Router()

const User = require("../model/user")
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

// register
router.post('/register', (req, res) => {
    try {
        bcrypt.hash(req.body.password, 10, function (err, hash) {

            if (err) {
                console.log(err);
                res.json({
                    message: "Something Wrong, Try Later!"
                });
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                });
                newUser.save()
                    .then(doc => {
                        res.status(201).json({ message: "User Registered successfully!!", data: doc })
                    })
                    .catch(err => {
                        res.json(err);
                    });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Registration failed!!" })
    }
})


// login 
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(401).json({ "error": "Wrong email!!" })
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (err) {
                res.json({
                    message: "Auth Failed",
                });
            }
            if (result) {
                const accessToken = jwt.sign(
                    {
                        id: user._id,
                        username: user.username,
                    },
                    process.env.JWT_SEC,
                    { expiresIn: "3d" }
                );
                const { password, ...others } = user._doc;
                res.status(200).json({
                    message: "User Found",
                    others: {...others, user}
                    // token: user
                });
            } else {
                res.json({
                    message: "Auth Failed",
                });
            }
        });

    } catch (error) {
        res.status(500).json({ "err": err, "message": "Registration failed!!" })
    }
})


module.exports = router