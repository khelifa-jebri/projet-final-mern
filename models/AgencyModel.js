const mongoose = require("mongoose");

const agency = {

    name: {
        type: String,
        required: true
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
        type: String,
    },

    address_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address'
    }

};

const AgencySchema = new mongoose.Schema(agency);

AgencyModel = mongoose.model("agency", AgencySchema);

module.exports = AgencyModel;