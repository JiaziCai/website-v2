import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

export const Logo = styled.header`
  background: #c7e2ff;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  display: flex;

  &:hover {
    background: none;
  }
  ${MEDIA.PHONE`
    height: ${({ height }) => () => {
      switch (height) {
        case 'large':
          return '2rem';
        default:
          return '100px';
      }
    }};
  `};

  ${MEDIA.PHONE`
    width: ${({ width }) => () => {
      switch (width) {
        case 'large':
          return '2rem';
        default:
          return '100px';
      }
    }};
  `};
`;
