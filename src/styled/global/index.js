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
    font-family: 'Roboto', sans-serif;
    font-size: 0.95rem;
    font-weight: 200;

    background-color: ${(props) => props.theme.background[10]};
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.grey[900]};
    font-size: 2rem;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    color: ${(props) => props.theme.grey[800]};
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${(props) => props.theme.grey[800]};
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    color: ${(props) => props.theme.grey[700]};
  }

  h5 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme.grey[700]};
  }

  h6 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme.grey[600]};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.background[100]};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #6870fa;
  }
  ::-webkit-scrollbar-track:hover {
    background: #21295c;
  }
  ::-webkit-scrollbar-track-piece:end {
    background: transparent;
  }
  ::-webkit-scrollbar-track-piece:start {
    background: transparent;
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


.lightmode-gradient-bg {
  background: linear-gradient(47deg, #400040, #1a0000, #2d2400, #002315, #00001a);
  background-size: 1000% 1000%;

  -webkit-animation: AniHomeBG 60s ease infinite;
  -moz-animation: AniHomeBG 60s ease infinite;
  animation: AniHomeBG 60s ease infinite;
}

.darkmode-gradient-bg {
  background: linear-gradient(47deg, #fff2ff, #ffd6d7, #fff5e6, #d3f3ef, #c5b5ff);
  background-size: 1000% 1000%;

  -webkit-animation: AniHomeBG 60s ease infinite;
  -moz-animation: AniHomeBG 60s ease infinite;
  animation: AniHomeBG 60s ease infinite;
}

@-webkit-keyframes AniHomeBG {
      0%{background-position:0% 99%}
      50%{background-position:100% 2%}
      100%{background-position:0% 99%}
  }
  @-moz-keyframes AniHomeBG {
      0%{background-position:0% 99%}
      50%{background-position:100% 2%}
      100%{background-position:0% 99%}
  }
  @keyframes AniHomeBG {
      0%{background-position:0% 99%}
      50%{background-position:100% 2%}
      100%{background-position:0% 99%}
  }

@keyframes grow {
  from {
    transform: scale(0.65);
  }
  to {
    transform: scale(1);
  }
}

`;

export default GlobalStyle;
