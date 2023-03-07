import { useState } from "react";
import ChatContent from "components/ChatContent";
import ChatBox from "components/ChatForm";
import styled from "styled-components";
import ChatEmpty from "components/ChatEmpty";
import { useSelector } from "react-redux";
import translations from "../../languages/translations.json";
import LanguageCodes from "components/LanguageCodes";
import ChatEssaysEg from "components/ChatEssaysEg";
import { QuestionIcon } from "assets/icons";

const Essays = () => {
  const [hasContent, setHasContent] = useState(false);
  const { language } = useSelector((state) => state.global);
  const lang = translations[language];
  const indexOfLang = LanguageCodes.indexOf(lang);

  const [post, setPost] = useState({
    language: lang.category.essays.predefinedVals.language[indexOfLang],
    topic: [],
    audience: [],
    formatting: [],
    tone: [],
    mood: [],
    wordLimit: 0,
    totalTokens: 0,
    balance: 0,
  });

  // put the "Word limit" in a <span>
  function replaceUnderscores(message, text) {
    const replacedMessage = message.replace(/___/g, `"<span>${text}</span>"`);
    return <h5 dangerouslySetInnerHTML={{ __html: replacedMessage }}></h5>;
  }

  return (
    <EssaysX>
      <div id="es-title">
        <h3>
          {lang.user.balance}: <span>{post.balance} </span>
          {post.balance > 1 ? lang.user.tokens : lang.user.token}
        </h3>
        {!post.wordLimit
          ? replaceUnderscores(
              lang.category.essays.noWordLimit,
              lang.category.essays.predefinedKeys.wordLimit
            ) // replace ' with "
          : lang.category.essays.cost}
        <QuestionIcon />
      </div>

      {!post.wordLimit ? (
        <ChatEmpty />
      ) : !hasContent ? (
        <ChatEssaysEg />
      ) : (
        <ChatContent />
      )}

      <div id="curve"></div>
      <ChatBox
        predefinedVals={lang.category.essays.predefinedVals}
        predefinedKeys={lang.category.essays.predefinedKeys}
        totalTokens={lang.chatForm.totalTokens}
        balance={lang.chatForm.balance}
        post={post}
        setPost={setPost}
      />
    </EssaysX>
  );
};

export default Essays;

const EssaysX = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  #es-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    width: 90%;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
      color: ${(props) => props.theme.grey[500]};
      font-weight: 400;
    }

    h5 {
      color: ${(props) => props.theme.grey[300]};
      font-weight: 300;
      margin: 0.5rem 0;
      span {
        color: ${(props) => props.theme.pinkAccent[400]};
      }
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${(props) => props.theme.pinkAccent[200]};
      opacity: 0.5;
    }
  }
`;
