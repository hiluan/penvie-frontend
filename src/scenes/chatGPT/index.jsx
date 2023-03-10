import React, { useState } from "react";
import { useNewChatGptMutation } from "state/apiChat";
import { useSelector } from "react-redux";
import { ChatForm } from "components/chat";
import translations from "../../languages/translations.json";
import styled from "styled-components";

const ChatGPT = () => {
  const [trigger] = useNewChatGptMutation();
  const { language } = useSelector((state) => state.global);
  const lang = translations[language];

  const [post, setPost] = useState({
    chatgpt: "",
  });

  return (
    <ChatGPTX>
      <ChatForm
        vals={lang.category.essays.predefinedVals}
        keys={lang.category.essays.predefinedKeys}
        post={post}
        setPost={setPost}
        prompt={""}
        trigger={trigger}
      />
    </ChatGPTX>
  );
};

const ChatGPTX = styled.section`
  height: 100vh;
`;
export default ChatGPT;
