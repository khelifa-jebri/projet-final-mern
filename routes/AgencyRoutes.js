const router = require("express").Router();
const agencyControllers = require("../controllers/AgencyController");

router.post("/addNewAgency", agencyControllers.addAgency);
router.get("/allAgencies", agencyControllers.findAllAgencies);
router.get("/getAgencyById/:id", agencyControllers.agencyById);
router.put("/updateAgency/:id", agencyControllers.updateAgency);
router.delete("/deleteAgency/:id", agencyControllers.deleteAgency);

module.exports = router;