const addressService = require("../services/AdressService");


module.exports = {
    addAddress(req, res) {
        const { number, street, region, postal_code } = req.body;
        addressService.addNewAddress(number, street, region, postal_code, res);
    },

    findAddressById(req, res) {
        addressService.findAddressById
    },

    findAllAddress(req, res) {
        addressService.findAllAddress(res);
    }
}