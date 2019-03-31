const router = require("express").Router();
const authenticationController = require("../../controllers/authenticationController");

// Matches with "/api/authentication/login"
router.route("/login").post(authenticationController.login);

// Matches with "/api/authentication/register"
router.route("/register").post(authenticationController.register);

// Matches with "/api/authentication/register"
router.route("/logout").get(authenticationController.logout);

module.exports = router;
