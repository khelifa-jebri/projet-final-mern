const router = require("express").Router();
const carControllers = require("../controllers/CarController");

router.post("/addNewCar", carControllers.addCar);
router.get("/allCars", carControllers.findAllCars);
router.put("/updateCar/:id", carControllers.updateCar);
router.delete("/deleteCar/:id", carControllers.deleteCar);

module.exports = router;