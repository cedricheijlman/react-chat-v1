import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Chat from "./components/chat/Chat";
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            !loggedIn ? (
              <Login
                username={username}
                setUsername={setUsername}
                setLoggedIn={setLoggedIn}
                roomName={roomName}
                setRoomName={setRoomName}
                socket={socket}
              />
            ) : (
              <Chat username={username} socket={socket} roomName={roomName} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
