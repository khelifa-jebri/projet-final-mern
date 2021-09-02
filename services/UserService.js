const userModel = require("../models/UserModel");

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

    findAllUsers(res) {
        userModel.find({})
            .then(data =>
                res.status(200).json({
                    status: 200,
                    msg: "All Users : ",
                    data: data
                }))
            .catch(err => console.log(err))
            //res.send("All clients All clients All clients All clients");
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