const router = require("express").Router()

const User = require("../model/user")
// const CryptoJS = require("crypto-js");
const crypto = require("crypto");

// register
router.post('/register', async (req, res) => {
    try {
        const initVector = crypto.randomBytes(16);
        const Securitykey = crypto.randomBytes(32);
        let encryptedData = cipher.update("jhkh", "utf-8", "hex");
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                "jh"
            ).toString(),
        });
        const data = await newUser.save()
        res.status(200).json({ "message": "User Registered successfully!!", "data": data })
    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Registration failed!!" })
    }
})


// login 
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json({ "error": "Wrong username!!" })

        const hashPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SEC)
        const password = hashPassword.toString(CryptoJs.enc.Utf8)
        password !== req.body.password && res.status(401).json({ "error": "Wrong password!!" })
        res.status(200).json({ "message": "User loggedIn successfully!!", "data": user })

    } catch (error) {
        res.status(500).json({ "err": err, "message": "Registration failed!!" })
    }
})


module.exports = router