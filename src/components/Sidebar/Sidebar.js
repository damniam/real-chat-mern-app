import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../SidebarChat/SidebarChat";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__avatar">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="sidebar__icons">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search user" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}
