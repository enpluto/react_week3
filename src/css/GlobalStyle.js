// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100dvh;
  }

  * {
    box-sizing: border-box;
    outline: none;
    outline-width: 0;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 50px 0;
  }

  a {
    color: black;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 3px;
    background-image: linear-gradient(#ccc, #ccc);
    background-position: left bottom;
    background-size: 0 7px;
    background-repeat: no-repeat;
    transition: background-size 0.25s;
  }

  a:hover {
    background-size: 100% 7px;
  }
`;

export default GlobalStyle;
