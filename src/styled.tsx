import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-color: #333333;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
  
  h1, p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
`;
