// import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "theme";
import LanguageDetector from "languages/LanguageDetector";
import GlobalStyle from "styled/global";
import Home from "./scenes/home";
import Layout from "./scenes/layout";
import Essays from "./scenes/essays";
import GrammarCorrection from "scenes/grammarCorrection";
import QA from "scenes/qa";
import Codex from "scenes/codex";
import { StatePageUpdater } from "components/utils";
import SignInForm from "components/auth/SignInForm";
import Userfront from "@userfront/react";
import ChatGPT from "scenes/chatGPT";

function App() {
  const { mode } = useSelector((state) => state.global);
  const theme = themes[mode];

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyle />
        {/* <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          {/* auto push the browser's language into the global state */}
          <LanguageDetector />
          <StatePageUpdater>
            <Routes>
              {/* every routes in here will have the navbar & sidebar:  */}
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={
                    // Userfront.accessToken() ? <SignInForm /> :
                    <Home />
                  }
                />
                <Route path="/chatgpt" element={<ChatGPT />} />
                <Route path="/essays" element={<Essays />} />
                <Route
                  path="/grammar-correction"
                  element={<GrammarCorrection />}
                />
                <Route path="/qa" element={<QA />} />
                <Route path="/codex" element={<Codex />} />
                {/* <Route path="/*signin" element={<SignInForm />} /> */}
                {/* <Route path="/signin" element={<SignInForm />} /> */}
              </Route>
            </Routes>
          </StatePageUpdater>
        </BrowserRouter>
        {/* </PersistGate>
        </Provider> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
