const User = require("../../model")
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const register = (req, res) => {
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
                    phone: req.body.phone,
                    address: req.body.address,
                    role: req.body.role,
                    password: hash
                });
                newUser.save()
                    .then(doc => {
                        const accessToken = jwt.sign(
                            {
                                id: doc._id,
                                username: doc.username,
                            },
                            process.env.JWT_SEC,
                            { expiresIn: "3d" }
                        );
                        const { password, ...others } = doc._doc;
                        res.status(201).json({
                            status: 'success', message: "User Registered successfully!!",
                            data: { ...others, accessToken }
                        })
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
}
const login = async (req, res) => {
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
}
module.exports = {
    register,
    login
}