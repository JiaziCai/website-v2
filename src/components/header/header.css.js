import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0rem;
  }
`;

export const Logo = styled.header`
  background: #013a9d;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;

  animation: 1s ease-out 0s 1 slideInFromTop;

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    background: none;
  }

  @media screen and (max-width: 450px) {
    svg {
      height: 40px;
    }
  }
  ${MEDIA.PHONE`
    height: ${({ height }) => () => {
      switch (height) {
        case 'large':
          return '2rem';
        default:
          return '40px';
      }
    }};
  `};

  ${MEDIA.PHONE`
    width: ${({ width }) => () => {
      switch (width) {
        case 'large':
          return '2rem';
        default:
          return '40px';
      }
    }};
  `};
`;
