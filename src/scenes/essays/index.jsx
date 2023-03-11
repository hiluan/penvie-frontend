import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ChatContent,
  ChatEmpty,
  ChatEssaysEg,
  ChatForm,
} from "components/chat";
import translations from "../../languages/translations.json";
import styled from "styled-components";
import { ReplaceUnderscores } from "components/utils";
import { useNewEssayMutation } from "state/apiEssays";

const Essays = () => {
  const [trigger] = useNewEssayMutation();

  // 500 words is an A4 page = 1000 tokens
  //
  const [hasContent, setHasContent] = useState(false);
  const [tokens, setTokens] = useState(0);
  const { language } = useSelector((state) => state.global);
  const lang = translations[language];
  let { prompt } = lang.category.essays;
  const [post, setPost] = useState({
    idea: "",
    language: lang.category.essays.predefinedVals.language[0],
    options: {
      topic: [],
      audience: [],
      formatting: [],
      tone: [],
      mood: [],
    },
    wordLimit: 0,
  });

  useEffect(() => {
    setTokens(post.wordLimit * 2);
  }, [post.wordLimit]);

  const length = () => {
    const page = Math.floor(post.wordLimit / 500); // 500 words/a4 page
    const rest = post.wordLimit / 500 - page;
    if (rest < 0.25) return `${page}.25`;
    if (0.25 < rest && rest < 0.5) return `${page}.5`;
    if (0.5 < rest && rest < 0.75) return `${page}.75`;
    if (0.75 < rest) return `${page}`;
  };

  return (
    <EssaysX>
      <div id="es-title">
        <h3>
          {lang.user.balance}: <span>{post.balance}</span>
          {post.balance > 1 ? lang.user.tokens : lang.user.token}
        </h3>
        {!!post.wordLimit && (
          <div>
            {ReplaceUnderscores(lang.category.essays.cost, tokens)}
            {ReplaceUnderscores(lang.category.essays.length, length())}
          </div>
        )}
      </div>
      {!hasContent ? <ChatEmpty /> : <ChatContent />}
      <div id="curve"></div>
      <ChatForm
        vals={lang.category.essays.predefinedVals}
        keys={lang.category.essays.predefinedKeys}
        post={post}
        setPost={setPost}
        prompt={prompt}
        trigger={trigger}
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

    div {
      position: absolute;
      top: 2rem;
    }
    h5 {
      color: ${(props) => props.theme.grey[300]};
      font-weight: 300;
      margin: 0.5rem 0;
    }
  }
`;
