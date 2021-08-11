import { Avatar } from "@material-ui/core";
import { AttachFile, InsertEmoticon, SearchOutlined } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import "./Chat.css";

export default function Chat() {
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
        <p className="chat__message">
          <span className="chat__name">Damian</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Damian</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Damian</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Damian</span>
          Lorem ipsum dolor sit amet, consectetur adip Duis excepteur culpa aute
          proident tempor commodo nisi consequat duis magna qui reprehenderit
          ad. In commodo ex Lorem labore ut. Cillum occaecat excepteur nisi ut
          aliqua quis ad commodo irure Lorem nisi sint est. Nostrud dolore
          pariatur occaecat anim qui laborum commodo. Do ipsum id aliquip
          excepteur est voluptate.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Damian</span>
          Ok
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
          <InsertEmoticon className="red" />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
      </div>
    </div>
  );
}
