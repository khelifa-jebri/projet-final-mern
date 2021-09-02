const router = require("express").Router();
const userController = require("../controllers/UserController");

router.post("/addNewUser", userController.addNewUser);
router.get("/getAllUsers", userController.allUsers);
router.get("/getUserById/:id", userController.userById);
router.get("/getUserByEmail/:email", userController.userByEmail);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/blockUser/:id", userController.blockUser);
router.put("/unblockUser/:id", userController.unblockUser);

module.exports = router;