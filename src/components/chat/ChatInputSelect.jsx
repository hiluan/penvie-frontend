import React from "react";

const ChatInputSelect = ({ vals, preKey, handleChange }) => {
  return (
    <select
      className="cf-predefined"
      name={preKey}
      onChange={handleChange}
      defaultValue={vals.language[0]}
    >
      {vals[preKey].map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default ChatInputSelect;
