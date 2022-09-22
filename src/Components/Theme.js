import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  themeOne,
  themeTwo,
  themeThree,
} from './Components/Styled/Themes.styled';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
