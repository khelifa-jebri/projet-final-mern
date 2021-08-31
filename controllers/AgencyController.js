const agencyService = require("../services/AgencyService");


module.exports = {
    addAgency(req, res) {
        const { name, phone_number, email, director, address_id } = req.body;
        agencyService.addNewAgency(name, phone_number, email, director, address_id, res);
    },

    findAllAgencies(req, res) {
        agencyService.findAllAgencies(res);
    }
}