const mongoose = require("mongoose");

const address = {

    number: {
        type: Number
    },

    street: {
        type: String
    },

    region: {
        type: String
    },

    postal_code: {
        type: Number
    },
};

const AddressSchema = new mongoose.Schema(address);

AddressModel = mongoose.model("address", AddressSchema);

module.exports = AddressModel;