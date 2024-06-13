import { styled } from 'styled-components';

export const Container = styled.section`
  & > span {
    display: block;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 600;
  }

  & > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 1.5rem;

    li {
      list-style: none;
    }
  }
`;
