const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require("./conn/conn")

const User = require("./models/user");
const Order = require("./models/order");
const Book = require("./models/book");


app.get("/", (req, res) => {
    res.send("Welcome to the Book Store Backend")
});

// app.listen(5000, ()=>{
//     console.log("Server running on port 5000");  
// })

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port " + process.env.PORT);  
})