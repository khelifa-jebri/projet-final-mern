const router = require("express").Router();
const reservationControllers = require("../controllers/ReservationController");

router.post("/addReservation", reservationControllers.addReservation);
router.get("/allReservations", reservationControllers.findAllReservations);
router.get("/reservationById/:id", reservationControllers.findReservationById);
router.put("/updateReservation/:id", reservationControllers.updateReservation);
router.put("/acceptReservation/:id", reservationControllers.acceptReservation);
router.put("/refuseReservation/:id", reservationControllers.refuseReservation);
router.put("/terminateReservation/:id", reservationControllers.terminateReservation);
router.delete("/deleteReservation/:id", reservationControllers.deleteReservation);

module.exports = router;