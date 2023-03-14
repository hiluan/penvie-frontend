import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSignedIn } from "state";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import styled from "styled-components";
import Userfront from "@userfront/react";
Userfront.init(process.env.REACT_APP_USERFRONT_ACCOUNT_ID);

const SignIn = ({ lang }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  useEffect(() => {
    if (
      document.location.search.includes("token=") &&
      document.location.search.includes("uuid=")
    ) {
      Userfront.login({ method: "link" });
      dispatch(setSignedIn(true));
    }
  }, []);

  const SSOButton = ({ provider }) => {
    const handleClick = (e) => {
      e.preventDefault();
      Userfront.login({ method: provider }).catch((err) => {
        setError(err.message);
      });
    };
    return (
      <button onClick={handleClick}>
        <h4>{lang.home.signin}</h4>
        <div></div>
        <img src={google} alt="Sign in with Google" />
      </button>
    );
  };

  return (
    <SignInX>
      {error && <div>Error: {error}</div>}
      <SSOButton provider="google" />
      <p>{lang.home.notice}</p>
      <p>
        {<Link to="/terms">{lang.home.terms} </Link>}
        {lang.home.and} {<Link to="/privacy">{lang.home.privacy}</Link>}.
      </p>
    </SignInX>
  );
};

const SignInX = styled.section`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  button {
    width: 270px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.375rem;
    padding: 0.375rem 0;
    margin-bottom: 1.5rem;
    border: none;
    background-color: ${(props) => props.theme.background[10]};
    transition: box-shadow 0.3s ease, filter 0.3s ease;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: none;
      filter: brightness(1.2);
    }

    h4 {
      color: ${(props) => props.theme.grey[900]};
    }

    img {
      position: absolute;
      right: 15%;
      height: 60px;
      width: 60px;
    }
  }

  p {
    font-size: 0.7rem;
    color: ${(props) => props.theme.grey[500]};
    a {
      color: ${(props) => props.theme.pinkAccent[300]};
    }
  }
`;
export default SignIn;
