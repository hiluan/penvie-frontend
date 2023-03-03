import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../state";
// import { FaSun, FaMoon } from "react-icons/fa";
import { theme } from "../theme";
const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.global.mode);
  const t = theme[mode];

  return (
    <nav style={{ backgroundColor: t.background[800] }}>
      <h1 style={{ color: t.primary[100] }}>My App</h1>
      <button onClick={() => dispatch(setMode())}>
        {mode === "dark" ? "+++" : "---"}
      </button>
    </nav>
  );
};

export default Navbar;
