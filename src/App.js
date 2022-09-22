import { ThemeProvider } from 'styled-components';
import {
  themeOne,
  themeTwo,
  themeThree,
} from './Components/Styled/Themes.styled';
import GlobalStyles from './Components/Styled/Global.styled';
import { StyledApp } from './Components/Styled/App.styled';
import Calculator from './Components/Calculator';
import Attribution from './Components/Attribution';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('themeOne');
  return (
    <ThemeProvider theme={themeOne}>
      <GlobalStyles />
      <StyledApp>
        <Calculator />
        <Attribution />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
