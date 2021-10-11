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
module.exports= {
    re
}