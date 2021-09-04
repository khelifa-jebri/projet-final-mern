const mongoose = require("mongoose");

const agency = {

    name: {
        type: String,
        required: true,
        unique: true
    },

    phone_number: {
        type: Number,
        required: true,
        unique: true
    },

    email: {
        type: String,
        unique: true
    },

    director: {
        type: Object,
        required: true
    },

    address: {
        type: Object,
    }

};

const AgencySchema = new mongoose.Schema(agency);

AgencyModel = mongoose.model("agency", AgencySchema);

module.exports = AgencyModel;