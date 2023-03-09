import React from "react";

const ChatInputText = ({ preKey, keys, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      className="cf-predefined"
      id="cf-wordlimit"
      type="number"
      name={preKey}
      placeholder={keys[preKey]}
    />
  );
};

export default ChatInputText;
