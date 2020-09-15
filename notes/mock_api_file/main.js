const express = require("express");
// BEFORE DEFINING A "central router" -------------------------------------
// const userRoutes = require("./routers/userRoutes");
// const productRoutes = require("./routers/productRoutes");
// const clientRoutes = require("./routers/clientRoutes");
// BEFORE DEFINING A "central router" -------------------------------------

// AFTER DEFINING A "central router" -------------------------------------
const centralRoutes = require("./api/apiRoutes");
// AFTER DEFINING A "central router" -------------------------------------
const server = express();

// BEFORE I USED ROUTERS ------------
// I am binding middleware to the application level (root) by using  server.use()
// server.use("/", (req, res) => {
//   res.send("API is up and running");
// });

// server.listen(8000, () => {
//   console.log("API running on port 8000");
// });
// BEFORE I USED ROUTERS ------------

// AFTER I USED ROUTERS ------------
// server.use("/users", userRoutes);
// server.use("/products", productRoutes);
// server.use("/clients", clientRoutes);
// AFTER I USED ROUTERS ------------

server.use("/api", centralRoutes);

server.listen(8000, () => console.log("API running on port 8000"));
