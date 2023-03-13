import { Logout, Moon, PenLogo, Sun, UserIcon } from "assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMode, setSignedIn } from "../state";
import { themes } from "../theme";
import styled from "styled-components";
import Userfront from "@userfront/react";
Userfront.init(process.env.REACT_APP_USERFRONT_ACCOUNT_ID);

const Navbar = () => {
  const dispatch = useDispatch();
  const { mode, language, signedIn } = useSelector((state) => state.global);
  const theme = themes[mode];

  return (
    <NavbarX>
      <Link id="navbar-left" to="/">
        <PenLogo />
      </Link>
      <div id="navbar-right">
        {!signedIn ? undefined : ( // </Link> //   <UserIcon /> // <Link to="#">
          <Link
            to="#"
            onClick={() => {
              dispatch(setSignedIn(false));
              Userfront.logout();
            }}
          >
            <Logout />
          </Link>
        )}
        <Link to="#" onClick={() => dispatch(setMode())}>
          {mode === "dark" ? <Moon /> : <Sun />}
        </Link>
      </div>
    </NavbarX>
  );
};

export default Navbar;

const NavbarX = styled.nav`
  position: absolute;
  top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  #navbar-left {
    &:hover {
      color: ${(props) => props.theme.background[200]};
    }
  }
  #navbar-right {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      padding: 0.5rem;
      margin: 0 0.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      color: ${(props) => props.theme.grey[500]};
      background-color: ${(props) => props.theme.background[10]};
      transition: box-shadow 0.3s ease, filter 0.3s ease;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

      &:hover {
        box-shadow: none;
        filter: brightness(1.3);
      }
    }
  }
`;
