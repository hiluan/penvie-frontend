import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setMode } from "../state";
// import { FaSun, FaMoon } from "react-icons/fa";
import { themes } from "../theme";
const Navbar = () => {
  const dispatch = useDispatch();
  const { mode, language } = useSelector((state) => state.global);
  const theme = themes[mode];

  return (
    <NavbarX>
      <div>
        <h1 style={{ color: theme.primary[100] }}>My App</h1>
        <button onClick={() => dispatch(setMode())}>
          {mode === "dark" ? "+++" : "---"}
        </button>
      </div>
    </NavbarX>
  );
};

export default Navbar;

const NavbarX = styled.nav`
  position: relative;
  div {
    position: absolute;
  }
  /* backgroundColor: theme.background[10] */
`;
