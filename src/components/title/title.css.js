import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  margin: auto;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '4.2rem';
      default:
        return '5rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '4rem';
      }
    }};
  `};
  ${MEDIA.PHONE`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
