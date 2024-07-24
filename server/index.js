const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require("./conn/conn")
const User = require("./routes/user_route");


// const order = require("./models/order");
// const book = require("./models/book");

// const User = require("./models/user");
// const Order = require("./models/order");
// const Book = require("./models/book");

app.use("/api/v1", User);

app.get("/", (req, res) => {
    res.send("Welcome to the Book Store Backend")
});

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port " + process.env.PORT);  
})