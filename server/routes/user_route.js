const router = require("express").Router();
const User = require("../models/user")

router.post("/signup", async (req, res) => {   

    try {
        const { username, password, email, address } = req.body;

        // if (username.length < 4) {
        //     return res.status(400).json({ message: "Username must be at least 4 characters long" });
        // }

        // if (password.length < 5) {
        //     return res.status(400).json({ message: "Password must be at least 5 characters long" });
        // }

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
            password: password,
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

module.exports = router; 