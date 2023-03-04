// import { themeSettings } from "theme";
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useMemo } from 'react';
import Home from './scenes/home';
import Layout from './scenes/layout';
import Essays from './scenes/essays';
import LanguageDetector from 'languages/LanguageDetector';
import { ThemeProvider } from 'styled-components';
import { themes } from 'theme';
import GlobalStyle from 'styled/global';

function App() {
  const { mode } = useSelector((state) => state.global);
  const theme = themes[mode];

  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <GlobalStyle />
        <BrowserRouter>
          {/* auto push the browser's language into the global state */}
          <LanguageDetector />
          <Routes>
            {/* every routes in here will have the navbar & sidebar:  */}
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/essays' element={<Essays />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
