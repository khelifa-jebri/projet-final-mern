const userService = require("../services/UserService");

module.exports = {
    addNewUser(req, res) {
        const { cin, firstName, lastName, password, date_of_birth, email, phone_number, gender, image, address_id } = req.body;
        userService.addNewUser(cin, firstName, lastName, password, date_of_birth, email, phone_number, gender, image, address_id, res);
    },

    allUsers(req, res) {
        userService.findAllUsers(res);
    },

    userById(req, res) {
        const { id } = req.params;
        userService.findUserById(id, res);
    },

    userByEmail(req, res) {
        const { email } = req.params;
        userService.findUserByEmail(email, res);
    },

    updateUser(req, res) {
        const { id } = req.params;
        const updatedUser = {...req.body };
        userService.updateUser(id, updatedUser, res);
    },

    deleteUser(req, res) {
        const { id } = req.params;
        userService.deleteUser(id, res);
    },

    blockUser(req, res) {
        const { id } = req.params;
        userService.blockUser(id, res);
    },

    unblockUser(req, res) {
        const { id } = req.params;
        userService.unblockUser(id, res);
    }

}