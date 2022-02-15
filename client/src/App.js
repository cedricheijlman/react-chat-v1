import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
