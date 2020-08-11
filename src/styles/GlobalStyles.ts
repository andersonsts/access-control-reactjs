import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    height: 100%;
    width: 100%;
  }

  input, button {
    font-family: 'Roboto';
  }

  button {
    cursor: pointer;
  }
`;
