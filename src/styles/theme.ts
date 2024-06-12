import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    text: '#020302',
    background: '#fcfdfc',
    primary: '#5059aa',
    secondary: '#eff7ee',
    accent: '#9bb5a1',
    white: '#fff',
  },
  fontSizes: {
    sm: 'clamp(0.8rem, 0.08vi + 0.78rem, 0.84rem)',
    base: 'clamp(1rem, 0.23vi + 0.94rem, 1.13rem)',
    md: 'clamp(1.25rem, 0.45vi + 1.14rem, 1.5rem)',
    lg: 'clamp(1.56rem, 0.79vi + 1.36rem, 2rem)',
  },
};
