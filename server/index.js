const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Player = require("./Models/Player")
require('dotenv').config()


mongoose.connect(process.env.MONGO, () => {
    console.log("Database is connected.")
    
});

app.listen(3000, () =>
    console.log('Server is online.')
);

