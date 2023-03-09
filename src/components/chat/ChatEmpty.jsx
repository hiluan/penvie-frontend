import React from "react";
import styled from "styled-components";

const ChatEmpty = () => {
  return (
    <ChatEmptyX>
      <h1>penvie</h1>
      <h6>OpenAI | ChatGPT</h6>
    </ChatEmptyX>
  );
};

const ChatEmptyX = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 5rem;
    font-weight: 200;
    color: ${(props) => props.theme.grey[200]};
    font-family: "Sacramento", cursive;
    z-index: 2;
  }
  h6 {
    margin-top: -2rem;
    /* font-size: 1.6rem; */
    font-weight: 300;
    color: ${(props) => props.theme.grey[200]};
    z-index: 1;
  }
`;
export default ChatEmpty;
