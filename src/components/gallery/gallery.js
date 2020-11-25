import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const cardOptions = [
  {
    id: 192,
    name: 'React',
  },
  {
    id: 202,
    name: 'React Native',
  },
  {
    id: 193,
    name: 'Node',
  },
  {
    id: 195,
    name: 'Data Viz',
  },
  {
    id: 196,
    name: 'UI/UX',
  },
];

const Gallery = ({ items }) => {
  const [skill, setSkill] = useState('React');

  useEffect(() => {}, [skill]);
  return (
    <section id="work">
      <div className="headTitle">
        <h1 style={{ margin: '2rem' }}>
          <span className="subNumber">02.</span>Work
        </h1>
        <h1 className="headLine subLine">{}</h1>
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: '5rem',
          marginBottom: '5rem',
        }}
      ></div>
      <div
        style={{
          textAlign: 'center',
          marginTop: '5rem',
          marginBottom: '5rem',
        }}
      >
        {cardOptions.map(({ id, name }) => (
          <p key={id} className="list">
            <button
              className={skill == name ? 'cardButtonActive' : 'cardButton'}
              onClick={() => setSkill(name)}
            >
              {name}
            </button>
          </p>
        ))}
      </div>
      <Container>
        {items
          .filter(name => name.tech.includes(skill))
          .map((item, i) => (
            <Item {...item} key={i} />
          ))}
      </Container>
    </section>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
