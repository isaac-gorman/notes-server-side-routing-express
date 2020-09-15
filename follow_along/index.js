const express = require("express");

const raceRoutes = require("./routes/raceRoutes");
const weaponRoutes = require("./routes/weaponRoutes");

const server = express();

server.use("/races", raceRoutes);
server.use("/weapons", weaponRoutes);

server.use("/", (req, res) => {
  res.send("API is ready to rumble⚡⚡!!");
});

server.listen(8000, () => {
  console.log("API is running on port 8000");
});
// Now lets begin managing my first resource: "races"
