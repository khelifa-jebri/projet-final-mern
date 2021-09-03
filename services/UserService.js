const userModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });

module.exports = {
    addNewUser(cin, firstName, lastName, password, date_of_birth, email, phone_number, gender, image, address_id, res) {
        userModel.create({
            cin,
            firstName,
            lastName,
            password,
            date_of_birth,
            email,
            phone_number,
            gender,
            image,
            address_id
        }, (err, data) => {
            if (err) throw err;
            else res.json({
                status: 200,
                message: "user added successfully.",
                data: data
            });
        })
    },

    // registration
    // @route   POST api/users/registerUser
    // @desc    this route is for registering the user
    // @access  Public
    register(cin, firstName, lastName, password, password_confirm, date_of_birth, email, phone_number, gender, image, address_id, res) {
        userModel.findOne({ email: email }, (err, data) => {
            if (err) throw err;
            if (data !== null) res.status(409).json({ msg: "email already exists" });
            else if (password !== password_confirm) res.status(400).json({ msg: "passwords are not the same" });
            else {
                bcrypt.genSalt(10, function(err, salt) {
                    if (err) throw err;
                    bcrypt.hash(password, salt, (err, cryptedPassword) => {
                        if (err) throw err;
                        userModel.create({
                            cin,
                            firstName,
                            lastName,
                            password: cryptedPassword,
                            date_of_birth,
                            email,
                            phone_number,
                            gender,
                            image,
                            address_id
                        }, (err, data) => {
                            if (err) throw err;
                            else res.json({
                                status: 200,
                                message: "User registered successfully",
                                data: data
                            });
                        })
                    });
                });
            }
        });
    },

    // login
    // @route   POST api/users/login
    // @desc    this route is for the user sign in
    // @access  Public
    login(email, password, res) {
        userModel.findOne({ email: email })
            .then((user) => {
                if (user) {
                    bcrypt.compare(
                        password,
                        user.password,
                        (err, passwordMatch) => {
                            if (err) throw err;
                            if (passwordMatch === true) {
                                jwt.sign({ user },
                                    process.env.SECRET_KEY,
                                    (err, token) => {
                                        if (err) throw err;
                                        res.status(200).json({
                                            status: 200,
                                            msg: "logged successfully",
                                            token: token,
                                        });
                                    }
                                );
                            } else {
                                res.status(400).json({
                                    status: 400,
                                    msg: "wrong password or email",
                                });
                            }
                        }
                    );
                } else {
                    res.status(400).json({
                        status: 400,
                        msg: "wrong password or email",
                    });
                }
            })
            .catch((err) => console.log(err));
    },

    findAllUsers(res) {
        userModel.find({})
            .then(data =>
                res.status(200).json({
                    status: 200,
                    msg: "All Users : ",
                    data: data
                }))
            .catch(err => console.log(err));
    },

    findUserById(id, res) {
        userModel.findById(id)
            .then(data =>
                res.status(200).json({
                    status: 200,
                    msg: "User by id : ",
                    data: data
                }))
            .catch(err => console.log(err))
    },

    findUserByEmail(email, res) {
        userModel.findOne({ email: email })
            .then(data =>
                res.status(200).json({
                    status: 200,
                    msg: "User by email : ",
                    data: data
                }))
            .catch(err => console.log(err))
    },

    updateUser(id, updatedUser, res) {
        userModel.findByIdAndUpdate(id, updatedUser)
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "Updated User : ",
                    data
                }))
            .catch(err =>
                console.log(err)
            );
    },

    deleteUser(id, res) {
        userModel.findByIdAndDelete(id)
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "Deleted User : ",
                    data: data
                }))
            .catch(err =>
                console.log(err)
            );
    },

    blockUser(id, res) {
        userModel.findByIdAndUpdate(id, { is_active: false })
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "Blocked User : ",
                    data
                }))
            .catch(err =>
                console.log(err)
            );
    },

    unblockUser(id, res) {
        userModel.findByIdAndUpdate(id, { is_active: true })
            .then(data =>
                res.status(200).json({
                    status: 200,
                    message: "Unblocked User : ",
                    data
                }))
            .catch(err =>
                console.log(err)
            );
    }


}