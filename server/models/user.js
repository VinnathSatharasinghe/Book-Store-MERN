const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const User = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    address:{
        type: String,
    },
    avatar:{
        type: String,
        default:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png",
    },
    role:{
        type: String,
        default: "user",
        enum: ["admin", "user"] 
    },
    favourites:[{
        type: mongoose.Types.ObjectId,
        ref: "books",
    }],
    cart:[{
        type: mongoose.Types.ObjectId,
        ref: "books",
    }],
    orders:[{
        type: mongoose.Types.ObjectId,
        ref: "order",
    }],
    
},
{ timestamps: true}
);

// User.methods.generateAuthToken = function() {
//     const token = jwt.sign({ _id: this._id, username: this.username }, process.env.JWT_PRIVATE_KEY,
//         { expiresIn: '56h' }
//     );

//     startCountdown();

//     return token;
// };

// Function to start a live countdown in the console

// function startCountdown(durationInSeconds) {
//     let remainingTime = durationInSeconds;

//     const intervalId = setInterval(() => {
//         if (remainingTime <= 0) {
//             console.log("Token has expired!");
//             clearInterval(intervalId);
//         } else {
//             const hours = Math.floor(remainingTime / 60);
//             const minutes = Math.floor((remainingTime % 3600) / 60);
//             const seconds = remainingTime % 60;
//             console.log(`Time remaining: ${minutes}m ${seconds}s`);
//             remainingTime--;
//         }
//     }, 1000);
// };


module.exports = mongoose.model("user", User);


// const UserModel = mongoose.model("User", User);
// module.exports = UserModel;