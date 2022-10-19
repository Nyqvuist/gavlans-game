const Player = require("../models/Player");
const mongoose = require('mongoose')

module.exports = {
    get: async (req, res) => {
        const questions = await Player.aggregate([{$sample: {size:5}}])
        res.json(questions)
    },
};