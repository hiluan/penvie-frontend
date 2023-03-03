// import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import Home from "./scenes/home";
import Layout from "./scenes/layout";
import Essays from "./scenes/essays";

function App() {
  // const mode = useSelector((state) => state.global.mode);
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
        <Routes>
          {/* every routes in here will have the navbar & sidebar:  */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/essays" element={<Essays />} />
          </Route>
        </Routes>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
