const agencyModel = require("../models/AgencyModel");
const mongoose = require("mongoose");
const addressModel = require("../models/AddressModel");

module.exports = {
    addNewAgency(name, phone_number, email, director, address_id, res) {

        address = addressModel.findById(address_id, (err, data) => {
            if (err) throw err;
            console.log(data);
        })
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
    findAllAgencies(res) {
        agencyModel.find({}).then(data => res.status(200).json({
                status: 200,
                message: "All Agencies",
                data: data
            }))
            .catch(err =>
                console.log(err)
            );

    }
}