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
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (messageData) => {
      setAllMessages((list) => [...list, messageData]);
    });

    const newUser = {
      username: "Server",
      room: roomName,
      timeSent:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
      message: `${username} Joined the Chat`,
    };
    socket.emit("send_message", newUser);
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
            value={currentMessage}
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                sendMessage();
              }
            }}
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
