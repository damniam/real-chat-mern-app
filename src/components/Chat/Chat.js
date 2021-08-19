import { Avatar } from "@material-ui/core";
import { AttachFile, InsertEmoticon, SearchOutlined } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import "./Chat.css";
import axios from "../../axios";

export default function Chat({ messages }) {
  const [input, setInput] = React.useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: "John",
      timestamp: "Just now",
      received: false,
    });
    setInput("");
  };

  const messagesBottom = React.useRef(null);

  const scrollToBottom = () => {
    messagesBottom.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__header-info">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map(({ name, message, timestamp, received }) => {
          return (
            <div>
              <p className={`chat__message ${received && "chat__received"} `}>
                <span className="chat__name">{name}</span>
                {message}
                <span className="chat__timestamp">{timestamp}</span>
              </p>
              <div ref={messagesBottom} />
            </div>
          );
        })}
      </div>

      <div className="chat__footer">
        <InsertEmoticon className="red" />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
}
