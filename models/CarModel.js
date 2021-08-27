const mongoose = require("mongoose");

const car = {

    registration_number: {
        type: String,
        required: true,
        unique: true
    },

    mark: {
        type: String,
        required: true,
    },

    model: {
        type: String,
        required: true,
    },

    power: {
        type: String,
    },

    color: {
        type: String,
    },

    fuel_type: {
        type: String,
    }
};

const CarSchema = new mongoose.Schema(car);

CarModel = mongoose.model("car", CarSchema);

module.exports = CarModel;