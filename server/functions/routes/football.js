const express = require("express");
const router = express.Router();

const footballController = require("../controllers/footballController");

router.get("/", footballController.get);

module.exports = router;
