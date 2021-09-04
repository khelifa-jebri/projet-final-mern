const agencyModel = require("../models/AgencyModel");

module.exports = {
    async addNewAgency(name, phone_number, email, director, address, res) {
        await agencyModel.create({
                name,
                phone_number,
                email,
                director,
                address
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

    async updateAgency(id, updatedAgency, res) {
        await agencyModel.findByIdAndUpdate(id, updatedAgency).then(data => res.status(200).json({
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