import { ChevronDown } from "assets/icons";
import React, { useState } from "react";
import styled from "styled-components";

const DropdownOptions = ({
  keys,
  vals,
  option,
  preKey,
  checkedOptions,
  handleCheckboxChange,
}) => {
  return (
    <>
      {vals[option].map((o) => (
        <label key={o}>
          <input
            type="checkbox"
            name={preKey}
            value={o}
            checked={checkedOptions.includes(o)}
            onChange={handleCheckboxChange}
          />
          <span>{o}</span>
        </label>
      ))}
    </>
  );
};

const DropdownButton = ({ label, onClick, isOpen }) => (
  <button onClick={onClick} type="button">
    <h6>{label}</h6>
    <div className={isOpen ? `cf-chevron-rotate` : ""}>
      <ChevronDown isOpen={isOpen} />
    </div>
  </button>
);

const ChatInputCheckbox = ({
  preKey, // preKey === 'options'
  isCheckbox,
  setIsCheckbox,
  keys,
  vals,
  handleChange,
}) => {
  const [openDropdown, setOpenDropdown] = useState("");
  const toggleDropdown = (val) => {
    setOpenDropdown((prevState) => (prevState === val ? "" : val));
  };

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
    <ChatInputCheckboxX isCheckbox={isCheckbox}>
      <button
        className="cf-predefined"
        onClick={() => setIsCheckbox(true)}
        type="button"
      >
        {keys[preKey]}
      </button>
      <div
        className="cf-panel-options"
        style={{
          transform: isCheckbox
            ? "translate(calc(-50%),-50%)"
            : "translate(calc(-50%),150%)",
          height: isCheckbox ? "auto" : "300px",
          opacity: isCheckbox ? "1" : "0.5",
        }}
      >
        {isCheckbox &&
          Object.keys(vals).map((option) => (
            <div className="cf-dropdown-container" key={option}>
              <DropdownButton
                label={keys[option]}
                onClick={() => toggleDropdown(option)}
                isOpen={openDropdown === option}
              />
              <div
                className="cf-dropdown-options"
                style={{
                  height: openDropdown === option ? "410px" : "0",
                  margin: openDropdown === option ? "1rem 0" : "0",
                }}
              >
                {openDropdown === option && (
                  <DropdownOptions
                    keys={keys}
                    vals={vals}
                    option={option}
                    preKey={preKey}
                    checkedOptions={checkedOptions}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </ChatInputCheckboxX>
  );
};

const ChatInputCheckboxX = styled.div`
  .cf-panel-options {
    width: 480px;
    max-width: 80%;
    position: fixed;
    top: 50%;
    left: 50%;
    /* transform: translate(
      calc(-50% + 125px),
      -50%
    ); // must be editted for responsive */
    transition: transform 0.5s ease, height 0.5s ease, opacity 0.5s ease;
    transform-origin: top center;

    border-radius: 0.375rem;
    padding: 2rem;
    border: none;
    box-shadow: none;
    background-color: ${(props) => props.theme.background[300]};
    z-index: 10;

    display: flex;
    flex-direction: column;

    .cf-dropdown-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0.375rem 0;
      background-color: ${(props) => props.theme.background[50]};
      border-radius: 0.375rem;
      button {
        border-radius: 0.375rem;
        width: 100%;
        padding: 0.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme.grey[500]};
        background-color: ${(props) => props.theme.background[100]};
        div {
          transition: rotate 5s ease;
        }
        div.cf-chevron-rotate {
          transform: rotate(180deg);
        }
      }

      .cf-dropdown-options {
        transition: height 0.5s ease;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        label {
          font-weight: 400;
          display: flex;
          font-size: 1rem;
          margin: 0.2rem 0;
          color: ${(props) => props.theme.grey[900]};
          padding: 0.1rem;
          cursor: pointer;

          input {
            transform: scale(1.2);
            margin: 0 0.8rem;
          }
        }
      }
    }
  }
`;

export default ChatInputCheckbox;

// <div>
//   <button
//     className="cf-predefined"
//     onClick={() => setIsCheckbox(preKey)}
//     type="button"
//   >
//     {keys[preKey]}
//   </button>
//   <div className={isCheckbox === preKey ? "cf-panel-options" : ""}>
//     {isCheckbox &&
//       Object.keys(vals).map((option) => (
//         <>
//           <h4>{keys[option]}</h4>
//           {option.map((o) => (
//             <label key={o}>
//               <input
//                 type="checkbox"
//                 name={preKey}
//                 value={o}
//                 checked={checkedOptions.includes(o)}
//                 onChange={handleCheckboxChange}
//               />
//               {o}
//             </label>
//           ))}
//         </>
//       ))}
//   </div>
// </div>;
