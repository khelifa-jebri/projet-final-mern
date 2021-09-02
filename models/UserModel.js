const mongoose = require("mongoose");

const user = {
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

    password: {
        type: String,
        required: true
    },

    date_of_birth: {
        type: Date
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone_number: {
        type: Number,
        required: true,
        unique: true
    },

    gender: {
        type: String
    },

    is_active: {
        type: Boolean,
        default: true
    },

    role: {
        type: String,
        default: "client"
    },

    image: {
        type: String,
    },

    address_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address'
    }
};

const UserSchema = new mongoose.Schema(user);

UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;