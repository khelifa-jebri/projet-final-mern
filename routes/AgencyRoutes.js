const router = require("express").Router();
const agencyControllers = require("../controllers/AgencyController");

router.post("/addNewAgency", agencyControllers.addAgency);
router.get("/allAgencies", agencyControllers.findAllAgencies);

module.exports = router;