import { QuestionIcon } from "assets/icons";
import React from "react";
import styled from "styled-components";

const ChatInputText = ({ preKey, keys, handleChange }) => {
  return (
    <ChatInputTextX>
      <input
        onChange={handleChange}
        className="cf-predefined"
        id="cf-wordlimit"
        type="number"
        name={preKey}
        placeholder={keys[preKey]}
      />
      <QuestionIcon />
    </ChatInputTextX>
  );
};

const ChatInputTextX = styled.div`
  display: flex;
  align-items: center;
  input {
    max-width: 100px;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.pinkAccent[500]};
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
  }
`;
export default ChatInputText;
