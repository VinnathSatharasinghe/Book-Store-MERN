const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const Admin = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png",
    },
    role:{
        type: String,
        default: "admin",
        enum: ["admin", "user"] 
    },
    
},
{ timestamps: true}
);


module.exports = mongoose.model("admin", Admin);
