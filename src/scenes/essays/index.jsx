import { useState } from "react";
import ChatContent from "components/ChatContent";
import ChatBox from "components/ChatBox";
import styled from "styled-components";
import ChatEmpty from "components/ChatEmpty";

const Essays = () => {
  const [hasContent, setHasContent] = useState(false);

  const [post, setPost] = useState([
    { wordLimit: 0 },
    { totalTokens: 0 },
    { languages: "English" },
    { type: "Write" },
  ]);

  return (
    <EssaysX>
      {!hasContent ? <ChatEmpty /> : <ChatContent />}
      <ChatBox />
    </EssaysX>
  );
};

export default Essays;

const EssaysX = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* background-color: red !important; */
  align-items: center;
`;
