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
    origin: "react-chat-v1.netlify.app",
  },
});

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("join_room", (roomId, username) => {
    socket.join(roomId);
    socket.username = username;
    socket.room = roomId;
  });

  socket.on("send_message", (messageData) => {
    console.log(messageData);
    socket.to(messageData.room).emit("receive_message", messageData);
  });

  socket.on("disconnect", () => {
    socket.to(socket.room).emit("receive_message", {
      username: "Server",
      timeSent:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
      message: `${socket.username} left the chat`,
    });
    console.log("user Disconnected");
  });
});

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
