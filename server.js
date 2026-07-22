const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const RTCMultiConnectionServer = require('rtcmulticonnection-server');

io.on('connection', function(socket) {
    RTCMultiConnectionServer.addSocket(socket);
});

const PORT = process.env.PORT || 9001;
server.listen(PORT, () => {
    console.log('Servidor corriendo en puerto ' + PORT);
});
