const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()


const quesRoute = require("./routes/questions");
app.use("/questions", quesRoute);

mongoose.connect(process.env.MONGO, () => {
    console.log("Database is connected.")
    
});

app.listen(3000, () =>
    console.log('Server is online.')
);

