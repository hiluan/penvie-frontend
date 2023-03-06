import { Logout, Moon, PenLogo, Sun, UserIcon } from "assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMode } from "../state";
import { themes } from "../theme";
import styled from "styled-components";

const Navbar = () => {
  const dispatch = useDispatch();
  const { mode, language } = useSelector((state) => state.global);
  const theme = themes[mode];

  return (
    <NavbarX>
      <Link id="navbar-left" to="/">
        {/* <h1 style={{ color: theme.primary[900] }}>Penvie</h1> */}
        <PenLogo />
      </Link>
      <div id="navbar-right">
        <Link to="#">
          <UserIcon />
        </Link>
        <Link to="#" onClick={() => dispatch(setMode())}>
          {mode === "dark" ? <Moon /> : <Sun />}
        </Link>
        <Link to="#">
          <Logout />
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
      background-color: ${(props) => props.theme.background[0]};
      color: ${(props) => props.theme.grey[500]};
      transition: background-color ease 0.3s, color ease 0.3s,
        box-shadow 0.3s ease;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
      &:hover {
        background-color: ${(props) => props.theme.background[50]};
        color: ${(props) => props.theme.grey[700]};
        box-shadow: none;
      }
    }
  }
`;
