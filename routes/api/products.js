const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/").get(productsController.findAll);

// // Matches with "/api/user"
// router.route("/populate")
//     .post(csvController.populate);

module.exports = router;
