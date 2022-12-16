const Soccer = require("../models/Soccer");
const mongoose = require("mongoose");

module.exports = {
  get: async (req, res) => {
    const questions = await Soccer.aggregate([{ $sample: { size: 5 } }]);
    res.json(questions);
  },
};
