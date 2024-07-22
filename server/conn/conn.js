const mongoose = require('mongoose');

const conn = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://vinnath:acerlaptop111@cluster0.acbjy23.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
};

conn();


