import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#4A90E2',
    secondary: '#50E3C2',
    background: '#F5F7FA',
    white: '#FFFFFF',
    gray: '#9B9B9B',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: ${theme.colors.background};
  }
`;
