const router = require("express").Router();
const clientController = require("../controllers/ClientController");

router.post("/addNewClient", clientController.addClient);

router.get("/getAllClients", clientController.allClients);
module.exports = router;