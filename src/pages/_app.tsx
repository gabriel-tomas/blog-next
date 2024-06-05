import { AppProps } from 'next/app';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

const ContainerExample = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </ul>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ContainerExample />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
