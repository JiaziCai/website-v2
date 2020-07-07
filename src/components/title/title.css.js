import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  margin-left: auto;
  margin-right: auto;

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
        return '5.35em';
      default:
        return '3rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '4em';
        default:
          return '4rem';
      }
    }};
  `};
  ${MEDIA.PHONE`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '3em';
        default:
          return '3em';
      }
    }};
  `};
`;
