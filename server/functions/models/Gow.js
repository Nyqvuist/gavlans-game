const mongoose = require("mongoose");

const gowSchema = new mongoose.Schema({
    question: String,
    answer: String,
    choices: [String],
}, {collection: 'quiz-gow'})


module.exports = mongoose.model("gow", gowSchema, 'quiz-gow');
