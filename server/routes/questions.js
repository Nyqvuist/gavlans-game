const express = require("express");
const { model } = require("mongoose");
const router = express.Router();

const questionController = require("../controllers/quesController");

router.get("/", questionController.get)

module.exports = router;