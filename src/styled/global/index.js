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

    background-color: ${(props) => props.theme.background[100]};
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
    font-weight: 300;
  }

  p {
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }

  textarea {
    font-family: 'Roboto', sans-serif;

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
  ::-webkit-scrollbar-track-piece:end {
    background: transparent;
  }
  ::-webkit-scrollbar-track-piece:start {
    background: transparent;
  }

  textarea::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  textarea::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  textarea::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.background[200]};
    border-radius: 5px;
    margin-left: 10px;
  }
  textarea::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 5px;
  }
  textarea::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 5px;
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
  background: linear-gradient(115deg, #1e001e 0%, #000014 100%),
    radial-gradient(
      90% 100% at 50% 0%,
      #1c1900 0%,
      #000014 100%
    ),
    radial-gradient(
      100% 100% at 80% 0%,
      #faff00 0%,
      #240000 100%
    ),
    radial-gradient(
      150% 210% at 100% 0%,
      #70ff00 0%,
      #14af7d 0%,
      #000aff 100%
    ),
    radial-gradient(
      100% 100% at 100% 30%,
      #ff4d00 0%,
      rgba(0, 200, 255, 1) 100%
    ),
    linear-gradient(60deg, #ff0000 0%, #7856ff 100%);
  background-blend-mode: overlay, overlay, difference, difference, difference,
    normal;

  /* background: linear-gradient(47deg, #1e001e, #0e0000, #1c1900, #001d14, #000014);
  background-size: 1000% 1000%;

  -webkit-animation: AniHomeBG 60s ease infinite;
  -moz-animation: AniHomeBG 60s ease infinite;
  animation: AniHomeBG 60s ease infinite; */
}

.darkmode-gradient-bg {
  background: linear-gradient(115deg, #ffdfe0 0%, #fff8ea 100%),
    radial-gradient(
      90% 100% at 50% 0%,
      #d4c4ff 0%,
      #ffdfe0 100%
    ),
    radial-gradient(
      150% 210% at 100% 0%,
      #d4c4ff 0%,
      #fff8ea 50%,
      #e7f8f5 100%
    ),
    radial-gradient(
      100% 100% at 80% 0%,
      #e7f8f5 0%,
      #fff4ff 100%
    ),
    radial-gradient(
      100% 100% at 100% 30%,
      rgba(255, 244, 255, 1) 0%,
      #d4c4ff 100%
    ),
    linear-gradient(60deg, #fff8ea 0%, #d4c4ff 100%);
  background-blend-mode: difference, overlay, difference, difference, difference,
    normal;

    /* background: linear-gradient(47deg, #fff4ff, #ffdfe0, #fff8ea, #e7f8f5, #d4c4ff);
  background-size: 1000% 1000%;

  -webkit-animation: AniHomeBG 60s ease infinite;
  -moz-animation: AniHomeBG 60s ease infinite;
  animation: AniHomeBG 60s ease infinite; */
}

/* @-webkit-keyframes AniHomeBG {
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
  } */

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
