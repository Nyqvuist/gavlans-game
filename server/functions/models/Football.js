const mongoose = require("mongoose");

const footballSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
    choices: [String],
  },
  { collection: "quiz-football" }
);

module.exports = mongoose.model("Football", footballSchema, "quiz-football");
