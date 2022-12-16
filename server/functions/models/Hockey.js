const mongoose = require("mongoose");

const hockeySchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
    choices: [String],
  },
  { collection: "quiz-hockey" }
);

module.exports = mongoose.model("Hockey", hockeySchema, "quiz-hockey");
