import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root {
  --sub-color: grey;
  --main-color: black;
 }

  body {
  margin: 0;
  font-family: 'Open Sans Condensed';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 20px 60px;
}

a {
  text-decoration: none;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;
