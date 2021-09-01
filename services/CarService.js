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
    updateCar(id, updatedCar, res) {
        carModel.findByIdAndUpdate(id, updatedCar).then(data => res.status(200).json({
                status: 200,
                message: "Updated Car : ",
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
    }
}