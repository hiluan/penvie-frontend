import { QuestionIcon } from "assets/icons";
import React from "react";
import styled from "styled-components";

const ChatEmpty = () => {
  return (
    <ChatEmptyX>
      <h1>penvie</h1>
      <h4>OpenAI | ChatGPT</h4>
      <QuestionIcon />
    </ChatEmptyX>
  );
};

const ChatEmptyX = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: 300;
    color: ${(props) => props.theme.grey[200]};
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 300;
    color: ${(props) => props.theme.grey[100]};
  }
  svg {
    margin-top: 1rem;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.greenAccent[500]};
  }
`;
export default ChatEmpty;
