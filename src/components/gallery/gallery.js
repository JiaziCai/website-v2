import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = ({ items, card }) => {
  return (
    <Container>
      {items
        .filter(name => name.tech.includes(card))
        .map((item, i) => (
          <Item {...item} key={i} />
        ))}
    </Container>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  card: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
