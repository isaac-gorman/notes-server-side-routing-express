const express = require("express");

// notice the uppercase "R"
const router = express.Router();

// - this file (Express Minion 🤖) will only be exectued upon a route that starts with "/users"
// - so I can actually omit the "users" from "/users" to simply "/" URL
router.get("/", (req, res) => {
  res.status(200).send("Hello from the GET /users endpoint");
});

router.get("/:id", (req, res) => {
  res.status(200).send("Howdy from the GET /users/:id endpoint");
});

router.post("/", (req, res) => {
  res.status(200).send("Hola from the POST /users endpoint");
});

// and so on ... I could add any other endpoint related to the user's resource

// and finaly after the route has been successfully configuired, then we export it so it can be used "required" where ever the team may need it
module.exports = routers;
// according to standard convention, it's often that module.exports is the last line of the file (express minion)
