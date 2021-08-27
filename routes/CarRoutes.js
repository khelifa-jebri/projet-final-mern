const router = require("express").Router();
const carControllers = require("../controllers/CarController");

router.post("/addNewCar", carControllers.addCar);
router.get("/allCars", carControllers.findAllCars);

module.exports = router;