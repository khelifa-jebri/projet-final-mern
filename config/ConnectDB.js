const mongoose = require("mongoose");
require("dotenv").config();

// const MONGODB_URI = "mongodb://localhost:27017/rentcardb";
const MONGODB_URI = process.env.MONGODB_URL;

const ConnectDB = () => {
    mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 30000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
        })
        .then(() => console.log("Connected to DB successfully. "))
        .catch((err) => console.log(err));
}

module.exports = ConnectDB;