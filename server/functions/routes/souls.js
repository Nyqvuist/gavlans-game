const express = require("express");
const router = express.Router();

const soulsController = require("../controllers/soulsController");

router.get("/", soulsController.get);

module.exports = router;
