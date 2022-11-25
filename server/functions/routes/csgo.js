const express = require("express");
const router = express.Router();

const questionController = require("../controllers/quesController");

router.get("/", questionController.get)

module.exports = router;