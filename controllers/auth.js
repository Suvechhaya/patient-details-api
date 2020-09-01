const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        //check if user already exist
        let checkIfUserExists = await User.findOne({ email: req.body.email });
        if (checkIfUserExists) {
            res.status(401).json({ error: "User email already registered"});
            return;
        }

        //convert to password hash
        let hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        if(!error.code) error.code = 500;
        res.status(error.code).send({error: error});
        return;
    }
};

exports.login = async (req, res) => {
    try {
        //check if user exists
        let fetchUser = await User.findOne({ email: req.body.email });
        if (!fetchUser) {
            res.status(404).json({ error: "User does not exist"});
            return;
        }

        //validate password
        let validatePassword = await bcrypt.compare(req.body.password, fetchUser.password)
        if (!validatePassword) {
            res.status(400).json({ error: "Password incorrect."});
            return;
        }

        //generate access token
        let accessToken = jwt.sign({ name: req.body.name }, process.env.JWT_SECRET);

        res.status(200).json({
            user: fetchUser,
            accessToken: accessToken
        })

    } catch (error) {
        if(!error.code) error.code = 500;
        res.status(error.code).send({error: error});
        return;
    }

};
