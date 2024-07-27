// const router = require("express").Router();
// const bycript = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const User = require("../models/user");
// const authenticateUser = require("../auth/userAuth");



// router.post("/signup", async (req, res) => {
//   try {
//     const { username, password, email, address } = req.body;

//     // if (username.length < 4) {
//     //     return res.status(400).json({ message: "Username must be at least 4 characters long" });
//     // }

//     // if (password.length < 5) {
//     //     return res.status(400).json({ message: "Password must be at least 5 characters long" });
//     // }

//     const hashedPassword = bycript.hashSync(password, 10);

//     const userExists = await User.findOne({ username: username });
//     if (userExists) {
//       return res.status(400).json({ message: "Username already exists" });
//     }

//     const emailExists = await User.findOne({ email: email });
//     if (emailExists) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const newUser = new User({
//       username: username,
//       password: hashedPassword,
//       email: email,
//       address: address,
//     });

//     await newUser.save();
//     return res.status(200).json({ message: "User saved successfully" });
//   } catch {
//     res.status(404).json({ message: "INTERNAL ERROR" });
//   }
// });

//login

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

// router.post("/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const authResult = await authenticateUser(username, password);

//     if (authResult.token) {

//       return res.status(200).json(authResult);
//     } else {


//       if (authResult.message === "Token expired") {
//         return res
//           .status(401)
//           .json({ message: "Token expired. Please log in again." });
//       } else {
//         return res.status(403).json({ message: authResult.message });
//       }
//     }
//   } catch (error) {
//     res.status(404).json({ message: "Server Error" });
//     console.error(error);
//   }
// });


// module.exports = router;


const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const User = require("../models/user");
const verifyToken = require("../middleware/verifyToken");;

// Sign up
router.post("/signup", async (req, res) => {
  try {
    const { username, password, email, address } = req.body;

    // Uncomment if you want to validate username and password length
    // if (username.length < 4) {
    //     return res.status(400).json({ message: "Username must be at least 4 characters long" });
    // }

    // if (password.length < 5) {
    //     return res.status(400).json({ message: "Password must be at least 5 characters long" });
    // }

    if (!username) {
      return res.status(200).json({ message: "nouser" });

    }

    if (!password) {
      return res.status(200).json({ message: "nopass" });

    }

    if (!email) {
      return res.status(200).json({ message: "noemail" });

    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const userExists = await User.findOne({ username: username });
    if (userExists) {
      return res.status(200).json({ message: "caseuser" });
    }

    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
      return res.status(200).json({ message: "caseemail" });
    }

    const newUser = new User({
      username: username,
      password: hashedPassword,
      email: email,
      address: address,
    });

    await newUser.save();
    return res.status(200).json({ message: "userok" });
  } catch (error) {
    res.status(500).json({ message: "INTERNAL ERROR" });
    console.error(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return res.status(200).json({ message: "nousername" });

    }
    if (!password) {
      return res.status(200).json({ message: "nopassword" });
    }

    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(200).json({ message: "caseusername" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(200).json({ message: "casepassword" });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "1h",
    });

    const decodedToken = jwt.decode(token);
    const expiresAt = new Date(decodedToken.exp * 1000); // Convert to milliseconds

    return res.status(200).json({
      message: "loginok",
      token,
      expiresAt,
      username,
      id: user._id,
      role: user.role
  
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.error("Login error:", error);
    console.log("JWT_SECRET:", process.env.JWT_PRIVATE_KEY);
  }
});

// Protected route example
router.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "This is a protected route", user: req.user });
});

module.exports = router;

