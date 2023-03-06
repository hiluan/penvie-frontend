import { SendIcon } from "assets/icons";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const ChatBox = () => {
  const handleSubmit = (e) => {};
  return (
    <ChatBoxX>
      <div id="chatbox-input">
        <input type="text" onClick={handleSubmit} />
        <Link to="#">
          <SendIcon />
        </Link>
      </div>
      <div id="chatbox-options"></div>
    </ChatBoxX>
  );
};

const ChatBoxX = styled.section`
  position: absolute;
  bottom: 4vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #chatbox-input {
    display: flex;
    background-color: ${(props) => props.theme.background[200]};
    /* padding: 0.5rem 1rem; */
    border-radius: 0.3rem;
    input {
      max-width: 90%;
      width: 600px;
      background-color: transparent;
      color: ${(props) => props.theme.grey[900]};
      padding: 0.75rem 0;
      padding-left: 1rem;
      border: none;
      outline: none;
    }

    a {
      /* width: 10%; */
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.grey[500]};
    }
  }
`;

export default ChatBox;
