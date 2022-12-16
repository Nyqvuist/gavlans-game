const Souls = require("../models/Souls");
const mongoose = require("mongoose");

module.exports = {
  get: async (req, res) => {
    const questions = await Souls.aggregate([{ $sample: { size: 5 } }]);
    res.json(questions);
  },
};
