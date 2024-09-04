// index.js or app.js

const express = require('express');
const cors = require('cors');
const http = require('http');
const mainrouter = require('./routes/index'); // Import the router correctly
const socketIo = require('socket.io');

const app = express();
// Use the router with '/api/v1' prefix

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  },
});


app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json()); // Add this line to parse JSON bodies
app.use('/api/v1', mainrouter); 
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('new_message', (msg) => {
    io.emit('broadcast', msg);
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
