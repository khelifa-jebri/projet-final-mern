const carModel = require("../models/CarModel");

module.exports = {
    addNewCar(registration_number, mark, model, power, color, fuel_type, res) {
        carModel.create({
                registration_number,
                mark,
                model,
                power,
                color,
                fuel_type
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

    }
}