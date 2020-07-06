import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.5rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }

  @media screen and (max-width: 450px) {
    ul {
      li {
        font-size: 1rem;
      }
    }
  }
`;
