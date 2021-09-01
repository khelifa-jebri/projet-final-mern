const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const MONGODB_URI = process.env.MONGODB_URL;

const ConnectDB = () => {
    mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            serverSelectionTimeoutMS: 30000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
        })
        .then(() => console.log("Database connected successfully ..."))
        .catch((err) => console.log(`Unable to connect with this database ${err}`));
}

module.exports = ConnectDB;