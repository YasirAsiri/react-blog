const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//register
router.post('/register', async (req,res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//login
router.post('/login', async (req,res) => {
    const credentialsError = { error: true, message: 'Wrong Credentials!'}
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.status(200).json(credentialsError);
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
            return res.status(200).json(credentialsError);
        }

        const {password, ...others} = user._doc;
        res.status(200).json(others);
        

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router