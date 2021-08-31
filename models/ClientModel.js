const mongoose = require("mongoose");

const client = {
    cin: {
        type: Number,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    adress: {
        type: String,
        required: true
    }
};

const ClientSchema = new mongoose.Schema(client);

ClientModel = mongoose.model("client", ClientSchema);

module.exports = ClientModel;