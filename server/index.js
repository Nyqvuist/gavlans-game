const app = require("express");
const http = require('http').Server(app);
const io = require('socket.io', {cors:{origin:"*"}})(http);
const mongoose = require("mongoose");
const Player = require("./schemas/Player")



mongoose.connect("mongodb+srv://Nyqvuist:omeed101@cluster0.n72pb.mongodb.net/csgo?retryWrites=true&w=majority", () => {
    console.log("Database is connected.")
    
});


app.listen(3001, () => {
    console.log("Server is running.")
});
