const express = require("express");
const router = express.Router();

const hockeyController = require("../controllers/hockeyController");

router.get("/", hockeyController.get);

module.exports = router;
