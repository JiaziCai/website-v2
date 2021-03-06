import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/#about" title="Go to about section">
            <span className="subNumberNav">01.</span>About
          </Link>
        </li>
        <li>
          <a href="/#work" title="Go to work section">
            <span className="subNumberNav">02.</span>Work
          </a>
        </li>
        <li>
          <Link to="/#contact" title="Go to contact section">
            <span className="subNumberNav">03.</span>Contact
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
