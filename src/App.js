import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StatePageUpdater } from "components/utils";
import { ThemeProvider } from "styled-components";
import { themes } from "theme";
import LanguageDetector from "languages/LanguageDetector";
import GlobalStyle from "styled/global";
import Home from "./scenes/home";
import LayoutHome from "./scenes/layoutHome";
import Essays from "./scenes/essays";
import ChatGPT from "scenes/chatGPT";
import LayoutProtected from "scenes/layoutProtected";

function App() {
  const { mode, signedIn } = useSelector((state) => state.global);
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
              {!signedIn && (
                <Route element={<LayoutHome />}>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              )}

              {!!signedIn && (
                <Route element={<LayoutProtected />}>
                  {/* FOR LATER <Route path="/" element={<Home />} /> */}
                  {/* <Route
                    path="/"
                    element={<Navigate to="/chatgpt" replace />}
                    // element={<ChatGPT />}
                  /> */}
                  <Route path="/" element={<Home />} />
                  <Route path="/chatgpt" element={<ChatGPT />} />
                  {/* <Route path="/essays" element={<Essays />} /> */}
                </Route>
              )}
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
