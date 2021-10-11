const router = require("express").Router()

const User = require("../model/user")
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

// register
router.post('/register', 
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
                res.status(201).json({
                    status: 'success',
                    message: "User loggedIn successfully!!",
                    data: { ...others, accessToken }
                });
            } else {
                res.json({
                    message: "Wrong Password!!",
                });
            }
        });

    } catch (error) {
        res.status(500).json({ "err": err, "message": "Registration failed!!" })
    }
})


module.exports = router