import React, { useState } from "react";
import io, { Socket } from "socket.io-client";
import "./login.css";
function Login({
  socket,
  username,
  setUsername,
  roomName,
  setRoomName,
  setLoggedIn,
}) {
  const joinRoom = () => {
    if (username !== "" && roomName !== "") {
      socket.emit("join_room", roomName, username);
      setLoggedIn(true);
    }
  };

  return (
    <div className="loginPage">
      <h1>React Chat V1</h1>

      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
      />

      <input
        onChange={(e) => {
          setRoomName(e.target.value);
        }}
        placeholder="Room Name"
      />
      <button onClick={joinRoom}>Join Chat</button>
    </div>
  );
}

export default Login;
