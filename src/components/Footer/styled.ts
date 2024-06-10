import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  margin-block: 1.3rem;

  span {
    display: block;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
