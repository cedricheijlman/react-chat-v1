import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useOutlet } from "react-router-dom";
import "./chat.css";
import ChatMessage from "./ChatMessage";

function Chat({ roomName, username, socket }) {
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const newMessage = {
        room: roomName,
        username: username,
        message: currentMessage,
        timeSent:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", newMessage);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (messageData) => {
      console.log(messageData);
    });
  }, [socket]);

  return (
    <div className="chat">
      <div className="chatBox">
        <div>
          <h2>
            Room{" "}
            <span style={{ fontStyle: "italic", color: "white" }}>
              {roomName}
            </span>
          </h2>
        </div>
        <div className="messages">
          <div className="message">
            <div className="messageUser">
              <h5>Username</h5>
              <h6>23:22</h6>
            </div>
            <p>
              This his is a messagehis is a messagehis is a messagehis is a mes
              sagehis is a messagehis is a mes sagehis is a messagehis is a
              messagehis is a messagehis is a messagehis is a messagehis is a
              messagehis is a messagehis is a messagehis is a messagehis is a
              messagehis is a messagehis is a messagehis is a messagehis is a
              messagehis is a messagehis is a messagehis is a messagehis is a
              messagehis is a messagehis is a messagehis is a messagehis is a
              messagehis is a messagehis is a messagehis is a messagehis is a
              shis is a messagessagehis is a messagehis is a messagehis is a
              messagehis is a messagehis is a messagehis is a messagehis is a
              messagehis is a message messageis a message
            </p>
          </div>

          <ChatMessage username="Joe" message="This is the message" />

          <div className="message">
            <div className="messageUser">
              <h5>Username</h5>
              <h6>23:22</h6>
            </div>
            <p>
              This his is a messagehis is a messagehis is a messagehis is a mes
            </p>
          </div>

          <div className="message">
            <div className="messageUser">
              <h5>Username</h5>
              <h6>23:22</h6>
            </div>
            <p>
              This his is a messagehis is a messagehis is a messagehis is a mes
            </p>
          </div>
        </div>

        <div className="messageBox">
          <input
            className="messageInput"
            placeholder="Send message to Room Name"
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
          />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
