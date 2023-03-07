import React, { useState } from "react";
import { SendIcon } from "assets/icons";
import styled from "styled-components";

const ChatForm = ({
  post,
  setPost,
  predefinedVals,
  predefinedKeys,
  totalTokens,
  balance,
}) => {
  const [checkbox, setCheckbox] = useState("");
  const [value, setValue] = useState("");

  const handleChangeTextarea = (e) => {
    setValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setValue(e.target.value);
  };

  const handleChangeInputs = (e, index) => {
    const { name, value, type, checked, number } = e.target;
    console.log("🚀 ~ name:", name);
    if (name === "wordLimit") {
      console.log("🚀 ~ wordLimit:", "wordLimit");
    }
    // const newVal = type === "checkbox" ? checked : value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ChatFormX onSubmit={handleSubmit}>
      {checkbox && (
        <div id="cf-predefined-options-shadow" onClick={() => setCheckbox("")}>
          asdfsadsdfasdffsadf
        </div>
      )}

      <div id="cf-textarea-container">
        <textarea rows={1} type="text" onChange={handleChangeTextarea} />
        <button>
          <SendIcon />
        </button>
      </div>
      <div id="cf-predefined-container">
        {Object.keys(predefinedKeys).map((key) =>
          key === "language" ? (
            <select // ---------------------------------- 1 select
              defaultValue={predefinedVals.language[0]}
              className="cf-predefined"
              key={key}
              name={key}
              onChange={handleChangeInputs}
            >
              {predefinedVals[key].map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          ) : key === "topic" ||
            key === "audience" ||
            key === "formatting" ||
            key === "tone" ||
            key === "mood" ? ( // ----------------------- 5 checkboxes
            <div key={key}>
              <button
                className="cf-predefined"
                onClick={() => setCheckbox(key)}
              >
                {predefinedKeys[key]}
              </button>
              <div
                className={
                  checkbox === key ? "cf-predefined-options-panel" : ""
                }
              >
                {checkbox === key &&
                  predefinedVals[key].map((option) => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        name={key}
                        value={option}
                        onChange={handleChangeInputs}
                      />{" "}
                      {option}
                    </label>
                  ))}
              </div>
            </div>
          ) : key === "wordLimit" ? (
            <input // ---------------------------------- 1 text input
              onChange={handleChangeInputs}
              className="cf-predefined"
              id="cf-wordlimit"
              key={key}
              type="number"
              name={key}
              placeholder={predefinedKeys[key]}
            />
          ) : null
        )}
      </div>
    </ChatFormX>
  );
};

const ChatFormX = styled.form`
  position: absolute;
  bottom: 4vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    #cf-predefined-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 768px;
      margin: 0 auto;
      .cf-predefined {
        flex-basis: 48%;
      }
    }
  }

  /* styles for smaller screens */
  @media (max-width: 767px) {
    #cf-predefined-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .cf-predefined {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }

  #cf-textarea-container {
    flex-grow: 1;
    margin: 1rem 0;
    border-radius: 0.375rem;

    position: relative;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    max-width: 90%;
    width: 600px;

    textarea {
      width: 100%;
      max-height: 160px;
      padding: 0.9rem 2.5rem 0.9rem 0.75rem;
      border-radius: 0.375rem;
      border: none;
      outline: none;
      resize: none;
      display: flex;
      transition: all ease 0.3s;
      color: ${(props) => props.theme.grey[600]};
      background-color: ${(props) => props.theme.background[50]};
      box-shadow: inset 0px 0px 0px 0.8px
          ${(props) => props.theme.pinkAccent[500]},
        0 0 10px 2px rgba(0, 0, 0, 0.1);
      transition: box-shadow ease 0.3s, background-color ease 0.3s,
        border ease 0.3s;
      &:hover {
        box-shadow: inset 0px 0px 0px 1px
          ${(props) => props.theme.pinkAccent[300]};
      }
      &:focus,
      &:active {
        box-shadow: none;
        background-color: ${(props) => props.theme.background[10]};
      }

      @media (min-width: 768px) {
        textarea {
        }
      }
    }

    button {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 2rem;
      height: 2rem;
      border-radius: 0.375rem;
      color: ${(props) => props.theme.grey[400]};
      margin: 0 0.375rem 0.375rem 0.375rem;
      background-color: transparent;
      outline: none;
      border: none;
      &:hover {
        background-color: ${(props) => props.theme.background[10]};
        color: ${(props) => props.theme.grey[600]};
      }
    }
  }
  #cf-predefined-container {
    display: flex;
    max-width: 90%;
    .cf-predefined {
      margin: 0 0.25rem;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.grey[200]};
      background-color: ${(props) => props.theme.background[50]};
      border: 1px solid ${(props) => props.theme.background[100]};
      opacity: 0.68;
      border-radius: 0.375rem;
      padding: 0.5rem;
      transition: box-shadow ease 0.3s;
      outline: none;
      &:hover {
        background-color: ${(props) => props.theme.background[10]};
        color: ${(props) => props.theme.grey[700]};
      }
    }

    #cf-wordlimit {
      color: ${(props) => props.theme.grey[700]};
      box-shadow: inset 0px 0px 0px 0.6px
        ${(props) => props.theme.pinkAccent[500]};

      &:hover {
        box-shadow: inset 0px 0px 0px 1px
          ${(props) => props.theme.pinkAccent[300]};
      }

      &:focus,
      &:active {
        box-shadow: none;
        background-color: ${(props) => props.theme.background[10]};
      }

      &::placeholder {
        color: ${(props) => props.theme.grey[200]};
      }
    }
    select {
    }
    button {
      border: none;
    }
  }

  #cf-predefined-options-shadow {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 5;
    backdrop-filter: blur(3px);
  }

  .cf-predefined-options-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(
      calc(-50% + 125px),
      -50%
    ); // must be editted for responsive
    z-index: 10;
    border-radius: 0.375rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border: none;
    box-shadow: none;
    background-color: ${(props) => props.theme.background[10]};
    label {
      color: ${(props) => props.theme.grey[900]};
      font-weight: 300;
      font-size: large;
      padding: 0.5rem 0;
    }
  }
`;

export default ChatForm;
