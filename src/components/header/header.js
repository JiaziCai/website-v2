import React, { Component } from 'react';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container, Logo } from './header.css';
import Jc from 'components/icons/jc';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <div className={this.state.visible ? 'navbar' : 'navbar--hidden'}>
        <AnimatedContainer>
          <Container>
            <Link to="/">
              <Logo>
                <Jc />
              </Logo>
            </Link>

            <Nav />
          </Container>
        </AnimatedContainer>
      </div>
    );
  }
}
