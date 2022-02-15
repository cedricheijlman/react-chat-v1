import React from "react";

function ChatMessage({ username, message }) {
  return (
    <div className="message">
      <div className="messageUser">
        <h5>{username}</h5>
        <h6>23:22</h6>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default ChatMessage;
