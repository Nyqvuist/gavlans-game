const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    question: String,
    name: String,
    answer: String,
    choices: [String],
}, {collection: 'quiz-csgo'})


module.exports = mongoose.model("Player", playerSchema, 'quiz-csgo');
