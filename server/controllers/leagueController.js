const League = require("../models/League");
const mongoose = require('mongoose')

module.exports = {
    get: async (req, res) => {
        const questions = await League.aggregate([{$sample: {size:5}}])
        res.json(questions)
    },
};