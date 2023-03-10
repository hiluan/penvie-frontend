import { useSelector } from "react-redux";
import { ReplaceUnderscores } from "components/utils";
import React from "react";
import styled from "styled-components";
import translations from "../../languages/translations.json";

const ChatErrorWordLimit = ({ setIsWordlimit }) => {
  const { language } = useSelector((state) => state.global);
  const lang = translations[language];
  const error = ReplaceUnderscores(
    lang.category.essays.noWordLimit,
    lang.category.essays.predefinedKeys.wordLimit
  );

  return (
    <ChatErrorWordLimitX onClick={() => setIsWordlimit(false)}>
      {error}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="12" fill="#000" opacity="0.3" />
        <line
          x1="7"
          y1="7"
          x2="17"
          y2="17"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.5"
        />
        <line
          x1="17"
          y1="7"
          x2="7"
          y2="17"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    </ChatErrorWordLimitX>
  );
};

const ChatErrorWordLimitX = styled.div`
  position: absolute;
  bottom: 44px;
  border-radius: 0.375rem;
  z-index: 10;
  padding: 1rem;
  opacity: 0.95;
  background-color: ${(props) => props.theme.background[200]};
  backdrop-filter: blur(5px);
  border: 2px solid red;
  svg {
    cursor: pointer;
    position: absolute;
    top: -25px;
    right: -25px;
  }
`;
export default ChatErrorWordLimit;
