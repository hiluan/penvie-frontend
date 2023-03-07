import { SendIcon } from "assets/icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

const ChatForm = ({ predefinedVals, predefinedKeys, totalTokens, balance }) => {
  const [checkbox, setCheckbox] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    // if (e.target.value === "") {
    //   e.target.style.height = "40px"; // set the original height here
    // }

    setValue(e.target.value);
  };

  const handleSubmit = (e) => {};

  return (
    <ChatFormX>
      <div id="cf-balance-container">
        <p>
          <span>{totalTokens}</span>
          <span>{}</span>
          <span> | </span>
          <span>{balance}</span>
          <span>{}</span>
        </p>
      </div>
      <div id="cf-textarea-container">
        <textarea rows={1} type="text" onChange={handleChange} />
        <button>
          <SendIcon />
        </button>
      </div>
      <div id="cf-options-container">
        {Object.keys(predefinedKeys).map((key) =>
          key === "language" ? (
            <select
              defaultValue={predefinedVals.language[0]}
              className="cf-predefined"
              key={key}
              name={key}
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
            key === "mood" ? (
            <div key={key}>
              <button
                className="cf-predefined"
                onClick={() => setCheckbox(key)}
              >
                {predefinedKeys[key]}
              </button>
              {checkbox && (
                <div
                  id="cf-checkbox-wrapper"
                  onClick={() => setCheckbox("")}
                ></div>
              )}
              {checkbox === key &&
                predefinedVals[key].map((option) => (
                  <label key={option}>
                    <input type="checkbox" name={key} value={option} /> {option}
                  </label>
                ))}
            </div>
          ) : key === "wordLimit" ? (
            <input
              className="cf-predefined"
              key={key}
              type="number"
              name={key}
              required
            />
          ) : key === "totalTokens" ? (
            <span className="cf-predefined" key={key}>
              {predefinedKeys[key]}
            </span>
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
    #cf-options-container {
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
    #cf-options-container {
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

  #cf-balance-container {
    display: flex;
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
      /* max-height: 200px; */
      /* height: 24px; */
      /* overflow-y: hidden; */
      /* rows: 1; */
      /* margin: 0; */

      width: 100%;
      max-height: 160px;
      color: ${(props) => props.theme.grey[700]};
      background-color: ${(props) => props.theme.background[50]};
      box-shadow: inset 0px 0px 1px ${(props) => props.theme.background[500]},
        0 0 20px 3px rgba(0, 0, 0, 0.15);
      transition: box-shadow ease 0.3s, background-color ease 0.3s;
      padding: 0.9rem 2.5rem 0.9rem 0.75rem;
      border-radius: 0.375rem;
      border: none;
      outline: none;
      resize: none;
      display: flex;
      transition: all ease 0.3s;
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        background-color: ${(props) => props.theme.background[100]};

        &:focus {
          outline: none;
          ring: none;
        }
        &:focus-visible {
          outline: none;
          ring: none;
        }

        @media (min-width: 768px) {
          textarea {
          }
        }
      }
    }
    /* position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    width: 600px;

    textarea {
      width: 100%;
      background-color: ${(props) => props.theme.background[50]};
      box-shadow: inset 0px 0px 1px ${(props) => props.theme.background[500]},
        0 0 20px 3px rgba(0, 0, 0, 0.15);
      transition: box-shadow ease 0.3s, background-color ease 0.3s;
      color: ${(props) => props.theme.grey[900]};
      padding: 0.75rem 0;
      padding-left: 0.75rem;
    border-radius: 0.375rem;
      border: none;
      outline: none;
      padding-right: 2.5rem;

      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        background-color: ${(props) => props.theme.background[100]};
      } */
    /* } */

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
  #cf-options-container {
    display: flex;
    max-width: 90%;
    .cf-predefined {
      margin: 0 0.25rem;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.grey[500]};
      background-color: ${(props) => props.theme.background[10]};
      border: none;
      border-radius: 0.375rem;
      padding: 0.5rem;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
      transition: box-shadow ease 0.3s;
      outline: none;
      &:hover {
        box-shadow: none;
      }
    }

    select {
    }
    button {
      border: none;
    }

    #cf-checkbox-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 1;
    }
  }
`;

export default ChatForm;
