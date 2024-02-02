const bcrypt = require('bcryptjs');
const db = require('../models/db');

module.exports.register = async (req, res, next) => {
    try {
        const { username, password, confirmPassword, email } = req.body;

        // Validation
        if (!(username && password && confirmPassword)) {
            return next(new Error('Fulfill all inputs'));
        }

        if (confirmPassword !== password) {
            throw new Error('Confirm password does not match');
        }

        const hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        const data = {
            username,
            password: hashedPassword, // Store the hashed password
            email
        };

        // Uncomment the following line to store the user in the database
        // await db.user.create(data);

        const rs = await db.user.create({ data })
        console.log(rs)

        res.send('User registered successfully');
    } catch (error) {
        next(error);
    }
};

module.exports.login = (req, res, next) => {
    res.send('in Login...');
};
