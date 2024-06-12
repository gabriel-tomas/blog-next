import { css, styled } from 'styled-components';

export const ContainerPostPage = styled.section`
  .container-main-content {
    & > h2 {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      margin-bottom: 0.8rem;
    }
    .container-content {
      ${({ theme }) => css`
        h1 {
          font-size: ${theme.fontSizes.lg};
          margin-bottom: 0.8rem;
        }
        h2 {
          font-size: ${theme.fontSizes.md};
          margin-bottom: 0.8rem;
        }
        p {
          font-size: ${theme.fontSizes.base};
        }

        ul {
          margin-top: 0.8rem;
        }

        li {
          list-style-position: inside;
        }
      `}
    }
  }
`;
