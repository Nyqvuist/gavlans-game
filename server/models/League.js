const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema({
    question: String,
    name: String,
    answer: String,
    choices: [String],
}, {collection: 'quiz-LoL'})


module.exports = mongoose.model("League", leagueSchema, 'quiz-LoL');
