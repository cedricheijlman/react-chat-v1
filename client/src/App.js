import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Chat from "./components/chat/Chat";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login socket={socket} />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
