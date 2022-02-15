import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="loginPage">
      <h1>React Chat V1</h1>

      <input placeholder="Username" />

      <input placeholder="Room Name" />
      <button>Join Chat</button>
    </div>
  );
}

export default Login;
