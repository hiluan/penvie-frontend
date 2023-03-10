import { QuestionIcon } from "assets/icons";
import React, { useState } from "react";
import styled from "styled-components";

const ChatInputText = ({ preKey, keys, handleChange, isEmpty }) => {
  return (
    <ChatInputTextX isEmpty={isEmpty}>
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

  #cf-wordlimit {
    max-width: 100px;
    color: ${(props) => props.theme.grey[700]};

    box-shadow: ${(props) =>
      props.isEmpty
        ? "none"
        : `inset 0px 0px 0px 0.8px ${props.theme.pinkAccent[500]}`};

    &:hover {
      box-shadow: inset 0px 0px 0px 1px
        ${(props) => props.theme.pinkAccent[300]};
    }

    &:focus,
    &:active {
      box-shadow: none;
      background-color: ${(props) => props.theme.background[10]};
    }

    &::placeholder {
      color: ${(props) => props.theme.grey[200]};
    }
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
