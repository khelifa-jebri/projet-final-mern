const carModel = require("../models/CarModel");

module.exports = {
    addNewCar(registration_number, mark, model, power, color, fuel_type, hour_price, agency_id, res) {
        carModel.create({
                registration_number,
                mark,
                model,
                power,
                color,
                fuel_type,
                hour_price,
                agency_id
            })
            .then(data =>
                res.json({
                    status: 200,
                    message: "Car added successfully.",
                    data: data
                })
            )
            .catch(err =>
                console.log(err)
            );
    },

    findAllCars(res) {
        carModel.find({}).then(data => res.status(200).json({
                status: 200,
                message: "All Cars",
                data: data
            }))
            .catch(err =>
                console.log(err)
            );
    },

    findCarById(id, res) {
        carModel.findById(id)
            .then(data =>
                res.status(200).json({
                    status: 200,
                    msg: "Car by id : ",
                    data: data
                }))
            .catch(err => console.log(err))
    },

    updateCar(id, updatedCar, res) {
        carModel.findByIdAndUpdate(id, updatedCar)
            .then(data =>
                res.status(200).json({
                    status: 200,
                    msg: "Updated Car successfully ",
                    data
                }))
            .catch(err =>
                console.log(err)
            );
    },

    deleteCar(id, res) {
        carModel.findByIdAndDelete(id).then(data => res.status(200).json({
                status: 200,
                message: "Deleted Car : ",
                data: data
            }))
            .catch(err =>
                console.log(err)
            );
    },

    reserveCar(id, res) {
        carModel.findByIdAndUpdate(id, { is_available: false })
            .then(data => res.status(200).json({
                status: 200,
                message: "Reserved Car : ",
                data
            }))
            .catch(err =>
                console.log(err)
            );
    },

    unreserveCar(id, res) {
        carModel.findByIdAndUpdate(id, { is_available: true })
            .then(data => res.status(200).json({
                status: 200,
                message: "Unreserved Car : ",
                data
            }))
            .catch(err =>
                console.log(err)
            );
    }
}