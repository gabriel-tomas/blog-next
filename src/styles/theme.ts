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
    sm: 'clamp(0.91rem, -0.04vi + 0.92rem, 0.89rem)',
    base: 'clamp(1rem, 0.11vi + 0.97rem, 1.06rem)',
    md: 'clamp(1.1rem, 0.32vi + 1.02rem, 1.27rem)',
    lg: 'clamp(1.21rem, 0.58vi + 1.06rem, 1.53rem)',
  },
};
