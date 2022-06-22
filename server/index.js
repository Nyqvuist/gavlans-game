const express = require('express');
const app = express();
const http = require('http');
const io = require('socket.io')(3001, {
    cors: {
        origin: ['http://localhost:3000']
    }
})
const mongoose = require("mongoose");
const Player = require("./schemas/Player")



mongoose.connect("mongodb+srv://Nyqvuist:omeed101@cluster0.n72pb.mongodb.net/csgo?retryWrites=true&w=majority", () => {
    console.log("Database is connected.")
    
});

app.get('/', (req, res) => {
    res.send('<h1>Test<h1>');

})

io.on('connection', (socket) => {
    console.log('a user connected')
});

