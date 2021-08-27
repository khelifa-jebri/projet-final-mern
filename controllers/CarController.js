const carModel = require("../models/CarModel");
const carService = require("../services/CarService");


module.exports = {
    addCar(req, res) {
        const { registration_number, mark, model, power, color, fuel_type } = req.body;
        carService.addNewCar(registration_number, mark, model, power, color, fuel_type, res);
    },

    findAllCars(req, res) {
        carService.findAllCars(res);
    }
}