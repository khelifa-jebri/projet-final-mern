const carModel = require("../models/CarModel");
const { deleteCar } = require("../services/CarService");
const carService = require("../services/CarService");


module.exports = {
    addCar(req, res) {
        const { registration_number, mark, model, power, color, fuel_type, hour_price, agency_id } = req.body;
        carService.addNewCar(registration_number, mark, model, power, color, fuel_type, hour_price, agency_id, res);
    },

    findAllCars(req, res) {
        carService.findAllCars(res);
    },

    updateCar(req, res) {
        const { id } = req.params;
        const updatedCar = {...req.body };
        carService.updateCar(id, updatedCar, res);
    },

    deleteCar(req, res) {
        const { id } = req.params;
        carService.deleteCar(id, res);
    }
}