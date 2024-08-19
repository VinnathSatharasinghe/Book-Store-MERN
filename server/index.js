const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require("./Connection")

const User = require("./routes/Userroute");
const Admin = require("./routes/Adminroute");
const Book = require("./routes/Bookroute");
const Order = require("./routes/Orderroute");

const cors = require('cors');
app.use(cors({
    origin: ["https://book-store-mern-rho.vercel.app"],
    methods:["GET", "POST","PUT","DELETE" ],
    credentials: true
}));


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