// const mongoose = require('mongoose');

// const conn = async () => {
//     try {
//         await mongoose.connect(
//             "mongodb+srv://vinnath:ggvinnath@books2024.wxxqwzu.mongodb.net/?retryWrites=true&w=majority&appName=books2024",
//             {
              
//             }
//         );
//         console.log("Connected to MongoDB");
//     } catch (err) {
//         console.error("Error connecting to MongoDB", err);
//     }
// };

// conn();

const mongoose = require('mongoose');
require('dotenv').config();

const conn = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI,
            {
                //  additional options 
            }
        );
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
};

conn();



