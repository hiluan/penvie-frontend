import React, { useState } from "react";

const ChatInputCheckbox = ({
  preKey,
  isCheckbox,
  setIsCheckbox,
  keys,
  vals,
  handleChange,
}) => {
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setCheckedOptions([...checkedOptions, value]);
    } else {
      setCheckedOptions(checkedOptions.filter((option) => option !== value));
    }
    handleChange(e);
  };

  return (
    <div>
      <button
        className="cf-predefined"
        onClick={() => setIsCheckbox(preKey)}
        type="button"
      >
        {keys[preKey]}
      </button>
      <div
        className={isCheckbox === preKey ? "cf-predefined-options-panel" : ""}
      >
        {isCheckbox === preKey &&
          vals[preKey].map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                name={preKey}
                value={option}
                checked={checkedOptions.includes(option)}
                onChange={handleCheckboxChange}
              />{" "}
              {option}
            </label>
          ))}
      </div>
    </div>
  );
};

export default ChatInputCheckbox;
