// import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "theme";
import LanguageDetector from "languages/LanguageDetector";
import GlobalStyle from "styled/global";
import Home from "./scenes/home";
import LayoutHome from "./scenes/layoutHome";
import Essays from "./scenes/essays";
import Grammar from "scenes/grammar";
import QA from "scenes/qa";
import Codex from "scenes/codex";
import { StatePageUpdater } from "components/utils";
import Userfront from "@userfront/react";
import ChatGPT from "scenes/chatGPT";
import LayoutProtected from "scenes/layoutProtected";
import SignIn from "components/auth/SignIn";

function App() {
  const { mode } = useSelector((state) => state.global);
  const theme = themes[mode];

  // if (!Userfront.accessToken()) {
  //   return <Navigate to="/signin" replace={true} />;
  // }
  // {!Userfront.accessToken() && <Navigate to="/signin" replace={true} />}

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
              <Route element={<LayoutHome />}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/signin" element={<LoginPage />} /> */}
              </Route>

              <Route element={<LayoutProtected />}>
                <Route path="/" element={<Home />} />
                <Route path="/chatgpt" element={<ChatGPT />} />
                {/* <Route path="/essays" element={<Essays />} /> */}
                {/* <Route path="/grammar" element={<Grammar />} /> */}
                {/* <Route path="/qa" element={<QA />} /> */}
                {/* <Route path="/codex" element={<Codex />} /> */}
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
