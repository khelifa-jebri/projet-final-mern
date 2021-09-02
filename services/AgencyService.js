const agencyModel = require("../models/AgencyModel");
const mongoose = require("mongoose");
const addressModel = require("../models/AddressModel");

module.exports = {
    addNewAgency(name, phone_number, email, director, address_id, res) {

        address = addressModel.findById(address_id, (err, data) => {
            if (err) throw err;
            console.log(data);
        });

        if (address != null) {
            agencyModel.create({
                    name,
                    phone_number,
                    email,
                    director,
                    address_id: address._id
                })
                .then(data =>
                    res.json({
                        status: 200,
                        message: "Agency added successfully.",
                        data: data
                    })
                )
                .catch(err =>
                    console.log(err)
                );
        }

    },

    findAgencyById(id, res) {
        agencyModel.findById(id)
            .then(data =>
                res.status(200).json({
                    status: 200,
                    msg: "Agency by id : ",
                    data: data
                }))
            .catch(err => console.log(err))
    },

    findAllAgencies(res) {
        agencyModel.find({}).then(data => res.status(200).json({
                status: 200,
                message: "All Agencies",
                data: data
            }))
            .catch(err =>
                console.log(err)
            );

    },

    updateAgency(id, updatedAgency, res) {
        agencyModel.findByIdAndUpdate(id, updatedAgency).then(data => res.status(200).json({
                status: 200,
                message: "Updated Agency : ",
                data
            }))
            .catch(err =>
                console.log(err)
            );
    },

    deleteAgency(id, res) {
        agencyModel.findByIdAndDelete(id).then(data => res.status(200).json({
                status: 200,
                message: "Deleted Agency : ",
                data: data
            }))
            .catch(err =>
                console.log(err)
            );
    }
}