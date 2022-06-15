const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    id: Number,
    team: String,
    nickname: String,
    slug: String
}, {collection: "players"});

const Player = module.exports = mongoose.model("Player", playerSchema, "players");
