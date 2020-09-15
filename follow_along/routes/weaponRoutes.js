const express = require("express");

const router = express.Router();

const weapons = ["club", "dagger", "handaxe", "spear", "hammer"];

router.get("/", (req, res) => {
  res.status(200).json(weapons);
});

module.exports = router;
