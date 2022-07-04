const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    // console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});
// io.emit("some event", { someProperty: "some value", otherProperty: "other value" }); // This will emit the event to all connected sockets

server.listen(port, () => {
  console.log("app is run on port ", port);
});
