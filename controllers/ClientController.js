const clientModel = require("../models/ClientModel");
const clientService = require("../services/ClientService");

module.exports = {
    addClient(req, res) {
        const { cin, firstName, lastName, phone, email, adress } = req.body;
        clientService.addNewClient(cin, firstName, lastName, phone, email, adress, res);
    },

    allClients(req, res) {
        clientService.findAllClients(res);
    }
}