const router = require("express").Router();
const carControllers = require("../controllers/CarController");

router.post("/addNewCar", carControllers.addCar);
router.get("/allCars", carControllers.findAllCars);
router.get("/getCarById/:id", carControllers.carById);
router.put("/updateCar/:id", carControllers.updateCar);
router.delete("/deleteCar/:id", carControllers.deleteCar);
router.put("/reserveCar/:id", carControllers.reserveCar);
router.put("/unreserveCar/:id", carControllers.unreserveCar);

module.exports = router;