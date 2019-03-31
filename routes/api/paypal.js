const router = require("express").Router();
const paypalController = require("../../controllers/paypalController");

// Matches with "/api/paypal"
router.route("/pay")
    .get(paypalController.checkout)
    .post(paypalController.payment);

router
    .route("/success")
    .get(paypalController.success);

router
    .route("/cancel")
    .get(paypalController.cancel);

module.exports = router;