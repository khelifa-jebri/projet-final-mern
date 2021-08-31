const router = require("express").Router();
const addressControllers = require("../controllers/AddressController");

router.post("/addNewAddress", addressControllers.addAddress);
router.get("/allAdresses", addressControllers.findAllAddress);

module.exports = router;