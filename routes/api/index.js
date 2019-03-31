const router = require("express").Router();
const exampleRoutes = require("./example");
const userRoutes = require("./user");
const csvRoutes = require("./csv");
const authenticationRoutes = require("./authentication");
const productsRoutes = require("./products");
const paypalRoutes = require("./paypal");
const tableRoutes = require("./table");

// Example routes
router.use("/example", exampleRoutes);
router.use("/user", userRoutes);
router.use("/userIndex", csvRoutes);
router.use("/authentication", authenticationRoutes);
router.use("/userIndex/products", productsRoutes);
router.use("/paypal", paypalRoutes);
router.use("/table", tableRoutes);

module.exports = router;
