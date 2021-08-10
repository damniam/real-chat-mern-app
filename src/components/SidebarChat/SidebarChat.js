import React from "react";
import "./SidebarChat.css"
import Avatar from "@material-ui/core/Avatar";

export default function SidebarChat() {
  return (
    <div className="sidebar-chat">
      <Avatar />
      <div className="sidebar-chat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
}
