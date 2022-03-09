import React from "react";
import ChatPage from "../components/chat/ChatPage";
import Carousel from "../components/Carousel";
import "../styles/userPage.css";

function UserPage() {
  return (
    <div>
      <div className="container" id="userPage">
        <div className="row">
          <div className="chat-container col s12">
            <Carousel />
          </div>
        </div>
        <div className="row">
          <div className="chat-container col s12">
            <ChatPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
