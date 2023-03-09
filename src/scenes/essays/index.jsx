import { useState } from "react";
import { QuestionIcon } from "assets/icons";
import { useSelector } from "react-redux";
import {
  ChatContent,
  ChatEmpty,
  ChatEssaysEg,
  ChatForm,
} from "components/chat";
import translations from "../../languages/translations.json";
import styled from "styled-components";

const Essays = () => {
  const [hasContent, setHasContent] = useState(false);
  const [errorWordLimit, setErrorWordLimit] = useState(false);
  const { language } = useSelector((state) => state.global);
  const lang = translations[language];
  let { prompt } = lang.category.essays;
  const [post, setPost] = useState({
    idea: "",
    language: lang.category.essays.predefinedVals.language[0],
    // options: {
    //   topic: [],
    //   audience: [],
    //   formatting: [],
    //   tone: [],
    //   mood: [],
    // },
    options: [],
    wordLimit: 0,
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
        {errorWordLimit ? (
          replaceUnderscores(
            lang.category.essays.noWordLimit,
            lang.category.essays.predefinedKeys.wordLimit
          )
        ) : (
          <h5>{lang.category.essays.cost}</h5>
        )}
      </div>

      {!post.wordLimit ? (
        <ChatEmpty />
      ) : !hasContent ? (
        <ChatEssaysEg />
      ) : (
        <ChatContent />
      )}

      <div id="curve"></div>
      <ChatForm
        vals={lang.category.essays.predefinedVals}
        keys={lang.category.essays.predefinedKeys}
        post={post}
        setPost={setPost}
        prompt={prompt}
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
    top: 5%;
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
  }
`;
