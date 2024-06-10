import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: .15s opacity;

    &:hover {
      opacity: 0.78;
    }
  }

  html {
    font-size: 16px;
    font-family: "Roboto", sans-serif
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const MainContainer = styled.main`
  max-width: 960px;
  margin-inline: auto;
  padding-inline: 1rem;
  margin-bottom: 3rem;
`;
