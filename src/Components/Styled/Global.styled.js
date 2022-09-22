import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
 background-color: ${({ theme }) => theme.backgroundColors.mainBg};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'League Spartan', sans-serif;
}

`;

export default GlobalStyles;
