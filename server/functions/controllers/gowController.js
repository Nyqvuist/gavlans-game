const Gow = require("../models/Gow");
const mongoose = require('mongoose')

module.exports = {
    get: async (req, res) => {
        const questions = await Gow.aggregate([{$sample: {size:5}}])
        res.json(questions)
    },
};