const Basketball = require("../models/Basketball");
const mongoose = require("mongoose");

module.exports = {
  get: async (req, res) => {
    const questions = await Basketball.aggregate([{ $sample: { size: 5 } }]);
    res.json(questions);
  },
};
