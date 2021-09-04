const userModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });

module.exports = {
    // Registration
    // @Route   POST api/users/registerUser
    // @Desc    this route is for registering the user
    // @Access  Public
    register(cin, firstName, lastName, password, password_confirm, date_of_birth, email, phone_number, gender, image, address, res) {
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
                            address
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

    // Login
    // @Route   POST api/users/login
    // @Desc    this route is for the user sign in
    // @Access  Public
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

    updatePassword(id, updatedPassword, res) {
        console.log(typeof updatedPassword);
        userModel.findById(id)
            .then(data => {
                bcrypt.compare(
                    updatedPassword.actualPassword,
                    data.password,
                    (err, passwordMatch) => {
                        if (err) throw err;
                        if (passwordMatch === true) {
                            if (updatedPassword.newPassword === updatedPassword.confirnNewPassword) {
                                bcrypt.genSalt(10, (err, salt) => {
                                    if (err) throw err;
                                    bcrypt.hash(updatedPassword.newPassword, salt, (err, cryptedPassword) => {
                                        if (err) throw err;
                                        userModel.findByIdAndUpdate(id, { password: cryptedPassword }, (err, data) => {
                                            if (err) throw err;
                                            res.status(200).json({
                                                status: 200,
                                                msg: "Update password successfully...",
                                                data
                                            })
                                        })
                                    });
                                });

                            } else {
                                res.status(400).json({
                                    msg: "The new password and the confirm password are not the same"
                                });
                            }
                        } else {
                            res.status(400).json({
                                status: 400,
                                msg: "Wrong password !!",
                            });
                        }
                    }
                );
            })
            .catch(err => console.log(err));

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