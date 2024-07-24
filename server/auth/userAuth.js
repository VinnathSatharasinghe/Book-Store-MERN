const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Function to handle user login and token generation
async function authenticateUser(username, password) {
    try {
        // Find user by username
        const user = await User.findOne({ username: username });

        // Check if user exists
        if (!user) {
            throw new Error('Invalid username');
        }

        // Check if password matches
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }

        // Generate JWT token
        const token = user.generateAuthToken();

        // Decode token to get expiration time
        const decodedToken = jwt.decode(token);
        const expiresAt = new Date(decodedToken.exp * 1000); // Convert to milliseconds

        return {
            message: 'Logged in successfully',
            token,
            expiresAt
        };
    } catch (error) {
        return {
            message: error.message,
            token: null,
            expiresAt: null
        };
    }
}

module.exports = authenticateUser;
