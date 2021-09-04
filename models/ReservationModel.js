const mongoose = require("mongoose");

const reservation = {

    start_date: {
        type: Date,
        required: true
    },

    end_date: {
        type: Date,
        required: true
    },

    state: {
        type: String,
        default: "In progress"
    },

    cost: {
        type: Number
    },

    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    car_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car'
    }
};

const ReservationSchema = new mongoose.Schema(reservation);

ReservationModel = mongoose.model("reservation", ReservationSchema);

module.exports = ReservationModel;