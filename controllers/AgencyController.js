const agencyService = require("../services/AgencyService");


module.exports = {
    addAgency(req, res) {
        const { name, phone_number, email, director, address_id } = req.body;
        agencyService.addNewAgency(name, phone_number, email, director, address_id, res);
    },

    findAllAgencies(req, res) {
        agencyService.findAllAgencies(res);
    },

    agencyById(req, res) {
        const { id } = req.params;
        agencyService.findAgencyById(id, res);
    },

    updateAgency(req, res) {
        const { id } = req.params;
        const updatedAgency = {...req.body };
        agencyService.updateAgency(id, updatedAgency, res);
    },

    deleteAgency(req, res) {
        const { id } = req.params;
        agencyService.deleteAgency(id, res);
    }
}