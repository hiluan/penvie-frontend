import React, { useState } from "react";
import { SendIcon } from "assets/icons";
import styled from "styled-components";
import { ChatInputCheckbox, ChatInputSelect, ChatInputText } from ".";

const ChatForm = ({ prompt, post, setPost, vals, keys }) => {
  const [isCheckbox, setIsCheckbox] = useState(false);
  // const handleChange = (e) => {
  //   const { name, value, checked } = e.target;
  //   if (typeof checked === "boolean") {
  //     if (checked) {
  //       setPost((postState) => ({
  //         ...postState,
  //         [name]: [...post[name], value],
  //       }));
  //     } else {
  //       const updatedValue = Array.isArray(post[name])
  //         ? post[name].filter((val) => val !== value)
  //         : post[name];
  //       setPost((postState) => ({
  //         ...postState,
  //         [name]: updatedValue,
  //       }));
  //     }
  //   } else {
  //     setPost((postState) => ({
  //       ...postState,
  //       [name]: value,
  //     }));
  //   }
  // };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setPost((prevState) => ({
      ...prevState,
      [name]: checked ? [...post[name], value] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let options = Object.keys(keys).map((key) => {
      const displayName = keys[key];
      const value = post[key];

      // If the option has multiple values, join them with commas
      const displayValue = Array.isArray(value) ? value.join(",") : value;

      return `${displayName}: ${displayValue}`;
    });

    // Join the options with newlines
    const prompt = options.join("\n");

    console.log(prompt);
  };

  return (
    <ChatFormX onSubmit={handleSubmit}>
      {isCheckbox && (
        <div
          id="cf-predefined-options-shadow"
          onClick={() => setIsCheckbox(false)}
        ></div>
      )}

      <div id="cf-textarea-container">
        <textarea name="idea" rows={1} type="text" onChange={handleChange} />
        <button>
          <SendIcon />
        </button>
      </div>
      <div id="cf-predefined-container">
        {Object.keys(post).map((preKey) => {
          switch (preKey) {
            case "language":
              return (
                <ChatInputSelect
                  key={preKey}
                  preKey={preKey}
                  vals={vals}
                  handleChange={handleChange}
                />
              );
            case "options":
              return (
                <ChatInputCheckbox
                  key={preKey}
                  preKey={preKey}
                  vals={vals.options}
                  keys={keys}
                  handleChange={handleChange}
                  isCheckbox={isCheckbox}
                  setIsCheckbox={setIsCheckbox}
                />
              );
            case "wordLimit":
              return (
                <ChatInputText
                  key={preKey}
                  preKey={preKey}
                  keys={keys}
                  handleChange={handleChange}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </ChatFormX>
  );
};

const ChatFormX = styled.form`
  position: absolute;
  bottom: 1vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    #cf-predefined-container {
      display: flex;
      justify-content: space-between;
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
      display: flex;
      align-items: center;
      opacity: 0.68;
      margin: 0 0.25rem;
      padding: 0.5rem;
      outline: none;
      white-space: nowrap;
      border-radius: 0.375rem;
      color: ${(props) => props.theme.grey[400]};
      background-color: ${(props) => props.theme.background[50]};
      border: 1px solid ${(props) => props.theme.background[100]};
      transition: box-shadow ease 0.3s;
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
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 5;
    backdrop-filter: blur(3px);
  }
`;

export default ChatForm;

{
  /* <div id="cf-predefined-container">
  {Object.keys(keys).map((preKey) => {
    switch (preKey) {
      case "language":
        return (
          <ChatInputSelect
            key={preKey}
            preKey={preKey}
            vals={vals}
            handleChange={handleChange}
          />
        );
      case "topic":
      case "audience":
      case "formatting":
      case "tone":
      case "mood":
        return (
          <ChatInputCheckbox
            key={preKey}
            preKey={preKey}
            vals={vals}
            keys={keys}
            handleChange={handleChange}
            isCheckbox={isCheckbox}
            setIsCheckbox={setIsCheckbox}
          />
        );
      case "wordLimit":
        return (
          <ChatInputText
            key={preKey}
            preKey={preKey}
            keys={keys}
            handleChange={handleChange}
          />
        );
      default:
        return null;
    }
  })}
</div>; */
}
