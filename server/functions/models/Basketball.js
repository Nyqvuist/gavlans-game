const mongoose = require("mongoose");

const basketballSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
    choices: [String],
  },
  { collection: "quiz-basketball" }
);

module.exports = mongoose.model("Basketball", basketballSchema, "quiz-csgo");
