import React from "react";

function ChatMessage({ username, message, timeSent }) {
  return (
    <div className="message">
      <div className="messageUser">
        <h5>{username}</h5>
        <h6>{timeSent}</h6>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default ChatMessage;
