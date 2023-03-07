import { useState } from "react";
import ChatContent from "components/ChatContent";
import ChatBox from "components/ChatForm";
import styled from "styled-components";
import ChatEmpty from "components/ChatEmpty";
import { useSelector } from "react-redux";
import translations from "../../languages/translations.json";

const Essays = () => {
  const [hasContent, setHasContent] = useState(false);
  const { language } = useSelector((state) => state.global);
  const lang = translations[language];
  const [post, setPost] = useState([
    { wordLimit: 0 },
    { totalTokens: 0 },
    { languages: "English" },
    { type: "Write" },
  ]);

  return (
    <EssaysX>
      {!hasContent ? <ChatEmpty /> : <ChatContent />}
      <ChatBox
        predefinedVals={lang.category.essays.predefinedVals}
        predefinedKeys={lang.category.essays.predefinedKeys}
        totalTokens={lang.chatForm.totalTokens}
        balance={lang.chatForm.balance}
      />
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
