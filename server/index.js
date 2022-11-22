const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require('cors');

app.use(cors())
const quesRoute = require("./routes/csgo");
app.use("/csgo", quesRoute);

const leagueRoute = require("./routes/league")
app.use("/league", leagueRoute);

mongoose.connect(process.env.MONGO, () => {
    console.log("Database is connected.")
    
});

app.listen(3001, '108.61.147.152', () =>
    console.log('Server is online.')
);

