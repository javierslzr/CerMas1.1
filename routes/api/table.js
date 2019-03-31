const router = require("express").Router();
const tableController = require("../../controllers/tableController");

// Matches with "/api/user"
router.route("/").post(tableController.findAll);

// // Matches with "/api/user"
// router.route("/populate")
//     .post(csvController.populate);

module.exports = router;
