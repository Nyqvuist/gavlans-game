const mongoose = require("mongoose");

const soulsSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
    choices: [String],
  },
  { collection: "quiz-souls" }
);

module.exports = mongoose.model("Souls", soulsSchema, "quiz-csgo");
