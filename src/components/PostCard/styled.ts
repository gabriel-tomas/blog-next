import { styled } from 'styled-components';

export const ContainerPostCard = styled.div`
  .container-img {
    height: 100%;

    img {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      border-radius: 0.3rem;
    }
  }

  h2 {
    margin-top: 0.3rem;
    font-size: ${({ theme }) => theme.fontSizes.base};

    & > a {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 400;
      font-size: inherit;

      &:hover {
        opacity: 0.78;
      }
    }
  }
`;
