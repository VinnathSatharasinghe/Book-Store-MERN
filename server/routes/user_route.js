const router = require("express").Router();
const User = require("../models/user")
const authenticateUser = require('../auth/userAuth');
const bycript = require("bcrypt");
const jwt = require('jsonwebtoken');
//sign up
router.post("/signup", async (req, res) => {   

    try {
        const { username, password, email, address } = req.body;

        // if (username.length < 4) {
        //     return res.status(400).json({ message: "Username must be at least 4 characters long" });
        // }

        // if (password.length < 5) {
        //     return res.status(400).json({ message: "Password must be at least 5 characters long" });
        // }

        const hashedPassword = bycript.hashSync(password, 10);

        const userExists = await User.findOne({ username: username });
        if (userExists) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const emailExists = await User.findOne({ email: email });
        if (emailExists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = new User ({

            username: username,
            password: hashedPassword,
            email: email,
            address: address,
        });

        await newUser.save();
        return res.status(200).json({ message:"User saved successfully" });

      
    }
    catch{
        res.status(404).json({message:"INTERNAL ERROR"});

    }
});

//login

router.post("/login", async (req, res) => {

    try {
    //     const { username, password } = req.body;

    //     const user = await User.findOne({ username: username });

    //     if (!user) {
    //         return res.status(400).json({ message: "Invalid username" });
    //     }

    //     const isMatch = bycript.compareSync(password, user.password);

    //     if (!isMatch) {
    //         return res.status(400).json({ message: "Invalid password" });
    //     }

    //     const token = user.generateAuthToken();

    //     const decodedToken = jwt.decode(token);
    //     const expiresAt = new Date(decodedToken.exp * 1000); // Convert to milliseconds

    //     return res.status(200).json({ 
    //         message: "Logged in successfully", 
    //         token,
    //         expiresAt 
    //     });

    const { username, password } = req.body;
        
        // Authenticate user
        const authResult = await authenticateUser(username, password);

        if (authResult.token) {
            // Successful authentication
            return res.status(200).json(authResult);
        } else {
            // Authentication failed
            return res.status(400).json({ message: authResult.message });
        }

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.error(error);
    }
});
module.exports = router; 