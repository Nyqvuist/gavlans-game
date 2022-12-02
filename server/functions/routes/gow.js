const express = require("express");
const router = express.Router();

const gowController = require("../controllers/gowController");

router.get("/", gowController.get)

module.exports = router;