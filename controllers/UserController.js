const userService = require("../services/UserService");

module.exports = {
    register(req, res) {
        const { cin, firstName, lastName, password, password_confirm, date_of_birth, email, phone_number, gender, image, address } = req.body;
        userService.register(cin, firstName, lastName, password, password_confirm, date_of_birth, email, phone_number, gender, image, address, res)
    },
    login(req, res) {
        const { email, password } = req.body;
        userService.login(email, password, res);
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

    updatePassword(req, res) {
        const { id } = req.params;
        const updatedPassword = {...req.body };
        userService.updatePassword(id, updatedPassword, res)
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