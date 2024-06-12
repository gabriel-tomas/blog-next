import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid #ccccccab;

  a {
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 500;
    letter-spacing: 0.1rem;

    h1 {
      font-size: inherit;
    }
  }
`;
