const mongoose = require("mongoose");

const soccerSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
    choices: [String],
  },
  { collection: "quiz-soccer" }
);

module.exports = mongoose.model("Soccer", soccerSchema, "quiz-soccer");
