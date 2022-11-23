const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }

const quesRoute = require("./routes/csgo");
app.use("/csgo", cors(corsOptions), quesRoute);

const leagueRoute = require("./routes/league")
app.use("/league", cors(corsOptions), leagueRoute);

mongoose.connect(process.env.MONGO, () => {
    console.log("Database is connected.")
    
});

app.listen(3001, () =>
    console.log('Server is online.')
);

