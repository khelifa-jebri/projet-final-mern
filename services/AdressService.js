const addressModel = require("../models/AddressModel");

module.exports = {
    addNewAddress(number, street, region, postal_code, res) {
        addressModel.create({
                number,
                street,
                region,
                postal_code
            })
            .then(data =>
                res.json({
                    status: 200,
                    message: "Address added successfully.",
                    data: data
                })
            )
            .catch(err =>
                console.log(err)
            );
    },

    findAllAddress(res) {
        addressModel.find({}).then(data => res.status(200).json({
                status: 200,
                message: "All Address",
                data: data
            }))
            .catch(err =>
                console.log(err)
            );

    }
}