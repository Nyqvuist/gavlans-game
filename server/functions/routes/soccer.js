const express = require("express");
const router = express.Router();

const soccerController = require("../controllers/soccerController");

router.get("/", soccerController.get);

module.exports = router;
