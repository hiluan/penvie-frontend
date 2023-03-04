// import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "theme";
import { useMemo } from "react";
import LanguageDetector from "languages/LanguageDetector";
import GlobalStyle from "styled/global";
import Home from "./scenes/home";
import Layout from "./scenes/layout";
import Essays from "./scenes/essays";
import GrammarCorrection from "scenes/grammarCorrection";
import QA from "scenes/qa";
import Codex from "scenes/codex";

function App() {
  const { mode } = useSelector((state) => state.global);
  const theme = themes[mode];

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyle />
        <BrowserRouter>
          {/* auto push the browser's language into the global state */}
          <LanguageDetector />
          <Routes>
            {/* every routes in here will have the navbar & sidebar:  */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/essays" element={<Essays />} />
              <Route
                path="/grammar-correction"
                element={<GrammarCorrection />}
              />
              <Route path="/qa" element={<QA />} />
              <Route path="/codex" element={<Codex />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
