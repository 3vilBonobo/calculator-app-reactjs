// import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/Styled/Global.styled';
import { StyledApp } from './Components/Styled/App.styled';
import Calculator from './Components/Calculator';
import Attribution from './Components/Attribution';

const App = () => {
  return (
    // <ThemeProvider>
    <>
      <GlobalStyles />
      <StyledApp>
        <Calculator />
        <Attribution />
      </StyledApp>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
