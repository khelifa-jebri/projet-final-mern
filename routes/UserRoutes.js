const router = require("express").Router();
const userController = require("../controllers/UserController");
const jwt = require("jsonwebtoken");
const { extractToken } = require("../middlewares/ExtractToken");

require("dotenv").config({ path: "./config/.env" });

router.post("/registerUser", userController.register);
router.post("/login", userController.login);
router.get("/getAllUsers", userController.allUsers);
router.get("/getUserById/:id", userController.userById);

// router.get("/getAllUsers", extractToken, (req, res) => {
//     jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
//         if (err) throw err;
//         if (authData.user.role === "admin" && authData.user.is_active === true) {
//             userController.allUsers(req, res);
//         } else {
//             res.status(403).json({
//                 status: 403,
//                 msg: "unauthorized operation",
//             });
//         }
//     })
// });

// router.get("/getUserById/:id", extractToken, (req, res) => {
//   jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
//     if (err) throw err;
//     if (authData.user.is_active === true) {
//       userController.userById(req, res);
//     } else {
//       res.status(403).json({
//         status: 403,
//         msg: "unauthorized operation",
//       });
//     }
//   });
// });

router.get("/getUserByEmail/:email", userController.userByEmail);
router.put("/updateUser/:id", userController.updateUser);
router.put("/updatePassword/:id", userController.updatePassword);
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/blockUser/:id", userController.blockUser);
router.put("/unblockUser/:id", userController.unblockUser);

module.exports = router;
