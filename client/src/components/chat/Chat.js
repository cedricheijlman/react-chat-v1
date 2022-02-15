import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./chat.css";
import ChatMessage from "./ChatMessage";

function Chat({ roomName, username }) {
  return (
    <div className="chat">
      <div className="chatBox">
        <div>
          <h2>Room Name</h2>
        </div>
        <div className="messages">
          <div className="message">
            <div className="messageUser">
              <h5>Usernamedddddd</h5>
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
          />
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
