const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require('cors');

app.use(cors())
app.use(express.json())

const quesRoute = require("./routes/csgo");
app.use("/csgo", quesRoute);

const leagueRoute = require("./routes/league")
app.use("/league", leagueRoute);

const gowRoute = require("./routes/gow")
app.use("/gow", gowRoute);

app.listen(3001, () => {
    console.log("server is online")
})

mongoose.connect(process.env.MONGO, () => {
    console.log("Database is connected.")
});

exports.app = functions.https.onRequest(app);