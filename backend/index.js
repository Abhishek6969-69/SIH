const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  },
});

// Configure CORS for Express.js routes
app.use(cors({
  origin: 'http://localhost:5173',
}));

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Change the event name here to match the client
  socket.on('new_message', (msg) => {
    io.emit('broadcast', msg);
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
