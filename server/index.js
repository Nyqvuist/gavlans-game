const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require('cors');

app.use(cors())
const quesRoute = require("./routes/csgo");
app.use("/csgo", quesRoute);

mongoose.connect(process.env.MONGO, () => {
    console.log("Database is connected.")
    
});

app.listen(3000, () =>
    console.log('Server is online.')
);

