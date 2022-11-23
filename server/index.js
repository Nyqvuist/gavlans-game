const express = require('express');
const app = express();
const fs = require("fs");
const https = require('https');
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require('cors');

app.use(cors())

https 
    .createServer(
        {
            key: fs.readFileSync("key.pem"),
            cert: fs.readFileSync("cert.pem")
        },
        app
    )
    .listen(3001, () => {
        console.log("Server is online.")
    })

const quesRoute = require("./routes/csgo");
app.use("/csgo", quesRoute);

const leagueRoute = require("./routes/league")
app.use("/league", leagueRoute);

mongoose.connect(process.env.MONGO, () => {
    console.log("Database is connected.")
    
});


