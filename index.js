const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new socketio.Server(server);

app.use(express.static("public"));

server.listen(port, function() {
  console.log("App listening on port " + port);
});

io.on("connection", function(socket) {
  socket.on("send message", function(name, message) {
    console.log(name + " said: " + message);
    io.emit('receive message', name, message);
  });
  
});
