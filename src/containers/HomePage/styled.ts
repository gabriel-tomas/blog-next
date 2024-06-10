import { styled } from 'styled-components';

export const Container = styled.section`
  margin-top: 2rem;

  & > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 1.5rem;

    li {
      list-style: none;
    }
  }
`;
