import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }
  html,
  body,
  #root,
  .app {
    height: 100%;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.background[0]};
  }

  h1 {
    font-family: 'Source Sans Pro', sans-serif;
    color: ${(props) => props.theme.primary[900]};
    font-size: 2rem;
  }

  h2 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.8rem;
  }

  h3 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.6rem;
  }

  h4 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.4rem;
  }

  h5 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.2rem;
  }

  h6 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #21295c;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #6870fa;
  }
  ::-webkit-scrollbar-track:hover {
    background: #21295c;
  }
  ::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 15px;
  }
  ::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 15px;
  }

  .pink-gradient-bg {
  background-color: #dd5ce5;
  background-image: url(https://cdn.openai.com/API/images/icon_bg_magenta.svg);
  background-size: cover;
}

.red-gradient-bg {
  background-color: #ef4146;
  background-image: url(https://cdn.openai.com/API/images/icon_bg_red.svg);
  background-size: cover;
}

.orange-gradient-bg {
  background-color: #f4ac36;
  background-image: url(https://cdn.openai.com/API/images/icon_bg_orange.svg);
  background-size: cover;
}

.green-gradient-bg {
  background-color: #19c37d;
  background-image: url(https://cdn.openai.com/API/images/icon_bg_green.svg);
  background-size: cover;
}

.purple-gradient-bg {
  background-color: #5436da;
  background-image: url(https://cdn.openai.com/API/images/icon_bg_blue.svg);
  background-size: cover;
}

`;

export default GlobalStyle;
