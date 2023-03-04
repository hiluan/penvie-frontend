import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../state';
// import { FaSun, FaMoon } from "react-icons/fa";
import { themes } from '../theme';
const Navbar = () => {
  const dispatch = useDispatch();
  const { mode, language } = useSelector((state) => state.global);
  const theme = themes[mode];

  return (
    <nav style={{ backgroundColor: theme.background[10] }}>
      <h1 style={{ color: theme.primary[100] }}>My App</h1>
      <button onClick={() => dispatch(setMode())}>
        {mode === 'dark' ? '+++' : '---'}
      </button>
    </nav>
  );
};

export default Navbar;
