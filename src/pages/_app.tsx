import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, MainContainer } from '../styles/global-styles';
import { theme } from '../styles/theme';

import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
