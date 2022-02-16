import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useOutlet } from "react-router-dom";
import "./chat.css";
import ChatMessage from "./ChatMessage";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ roomName, username, socket }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

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
      setAllMessages((list) => [...list, newMessage]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (messageData) => {
      console.log(messageData);
      setAllMessages((list) => [...list, messageData]);
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
        <ScrollToBottom className="messages">
          {allMessages &&
            allMessages.map((msg) => {
              return (
                <ChatMessage
                  message={msg.message}
                  timeSent={msg.timeSent}
                  username={msg.username}
                />
              );
            })}
        </ScrollToBottom>
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
