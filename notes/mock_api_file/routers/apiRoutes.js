const express = require("express");

// If the resources routes are not nested within the "/api" the paths could change
const userRoutes = require("./routers/userRoutes");
const productRoutes = require("./routers/productRoutes");
const clientRoutes = require("./routers/clientRoutes");

// Again Isaac notice the uppercase "R"
const router = express.Router();

// This file (Express Minion) will onlybe used whenever the route beign hit is titled "/api" and not any other time
// - No I can simplify the URL path so that "/api/users" or "/api/products" is merly "/users" and "/products"
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/clients", clientRoutes);

// Now set up the (express minion) to ready for use
module.exports = router;
