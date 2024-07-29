const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require("./conn/conn")

const User = require("./routes/user_route");
const Admin = require("./routes/admin_route");
const Book = require("./routes/book_route");
const Order = require("./routes/order_route");

const cors = require('cors');
app.use(cors());


app.use("/api", User);
app.use("/api", Admin);
app.use("/api", Book);
app.use("/api", Order);


app.get("/", (req, res) => {
    res.send("Welcome to the Book Store Backend")
    console.log("JWT_SECRET:", process.env.JWT_PRIVATE_KEY);
});

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port " + process.env.PORT);  
})