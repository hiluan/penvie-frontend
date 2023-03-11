import React, { useEffect, useState } from "react";
import { SendIcon } from "assets/icons";
import styled from "styled-components";
import { ChatInputCheckbox, ChatInputSelect, ChatInputText } from ".";
import ChatErrorWordLimit from "./ChatErrorWordLimit";

const ChatForm = ({ trigger, prompt, post, setPost, vals, keys }) => {
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [isWordlimit, setIsWordlimit] = useState(false);

  // setIstCheckbox(false) if ESC pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsCheckbox(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleChange = (e) => {
    const { name, title, value, checked } = e.target;
    // handle textarea to stretch to fit its content stackoverflow.com/questions/2803880/;
    if (name === "idea") {
      e.target.style.height = "";
      e.target.style.height = e.target.scrollHeight + "px";
    }

    if (name === "options") {
      const updatedOptions = { ...post.options };
      if (checked) {
        updatedOptions[title] = [...updatedOptions[title], value];
      } else {
        updatedOptions[title] = updatedOptions[title].filter(
          (val) => val !== value
        );
      }
      setPost((prevState) => ({
        ...prevState,
        options: updatedOptions,
      }));
    } else {
      setPost((prevState) => ({
        ...prevState,
        [name]: checked ? [...post[name], value] : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!post.idea.length) return;

    // check word limit for essays
    if (post.wordLimit !== undefined && !post.wordLimit) {
      setIsWordlimit(true);
      return;
    }

    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);

    // add all info in the post{} into a string.
    for (let key in post) {
      if (post[key].length === 0) continue;
      if (key !== "options") {
        prompt += `\n- ${keys[key]}: ${post[key]}.`;
      } else {
        for (let option in post.options) {
          if (post.options[option].length === 0) continue;
          const all = post.options[option].join(", ");
          prompt += `\n- ${keys[option]}: ${all}.`;
        }
      }
    }

    post["created"] = date;

    // send request to the backend
    trigger(post);
    console.log("🚀 ~ post:", post.idea);
  };

  return (
    <ChatFormX onSubmit={handleSubmit}>
      {(isCheckbox || isWordlimit) && (
        <div
          id={
            isWordlimit
              ? "cf-predefined-options-error"
              : isCheckbox
              ? "cf-predefined-options-shadow"
              : ""
          }
          onClick={() => {
            setIsWordlimit(false);
            setIsCheckbox(false);
          }}
          style={{ opacity: isCheckbox || isWordlimit ? 1 : 0.3 }}
        ></div>
      )}

      {isWordlimit && <ChatErrorWordLimit setIsWordlimit={setIsWordlimit} />}

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
                  isEmpty={post.wordLimit}
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
    max-width: 90%;
    width: 600px;

    textarea {
      width: 100%;
      max-height: 320px;
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
      margin: 0 0.375rem 0.375rem 0.375rem;
      outline: none;
      border: none;
      color: ${(props) => props.theme.grey[400]};
      background-color: ${(props) => props.theme.pinkAccent[200]};
      /* background-color: transparent; */
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: ${(props) => props.theme.pinkAccent[500]};
        svg {
          color: white;
        }
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
    backdrop-filter: blur(3px);
    z-index: 5;
    transition: opacity ease 1s;
  }

  #cf-predefined-options-error {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
  }
`;

export default ChatForm;
