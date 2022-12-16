const Football = require("../models/Football");
const mongoose = require("mongoose");

module.exports = {
  get: async (req, res) => {
    const questions = await Football.aggregate([{ $sample: { size: 5 } }]);
    res.json(questions);
  },
};
