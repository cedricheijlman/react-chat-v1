const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const port = process.env.PORT || 3001;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log("user joined room", roomId);
  });

  socket.on("disconnect", () => {
    console.log("user Disconnected");
  });
});

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
