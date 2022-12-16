const Hockey = require("../models/Hockey");
const mongoose = require("mongoose");

module.exports = {
  get: async (req, res) => {
    const questions = await Hockey.aggregate([{ $sample: { size: 5 } }]);
    res.json(questions);
  },
};
