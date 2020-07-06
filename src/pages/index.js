import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Modal from 'containers/modal';
import Contact from 'components/contact';
import Profile from 'components/profile';
import { graphql } from 'gatsby';
import './index.css';

const cardOptions = [
  {
    id: 191,
    name: 'All',
  },
  {
    id: 192,
    name: 'React',
  },
  {
    id: 193,
    name: 'Node',
  },
  {
    id: 194,
    name: 'REST API',
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

const Index = ({ data }) => {
  const [card, setCard] = useState('All');
  return (
    <Layout>
      <Box>
        <Title as="h2" size="large">
          {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
        </Title>
        {/* <Modal>
          <video
            src="https://i.imgur.com/gzFqNSW.mp4"
            playsInline
            loop
            autoPlay
            muted
          />
        </Modal> */}
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <a
            href="mailto:caijiazi777@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="email"
          >
            <span>Say Hello</span>
          </a>
        </div>
      </Box>
      <div style={{ height: '30vh' }}></div>
      <a name="about" href="/">
        {}
      </a>
      <Profile />
      <div style={{ height: '30vh' }}></div>
      <a name="work" href="/">
        {}
      </a>
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
      >
        {cardOptions.map(({ id, name }) => (
          <p key={id} className="list">
            <button
              className={card == name ? 'cardButtonActive' : 'cardButton'}
              onClick={e => setCard(name)}
            >
              {name}
            </button>
          </p>
        ))}
      </div>
      <Gallery items={data.homeJson.gallery} card={card} />
      <div style={{ height: '20vh' }} />
      <a name="contact" href="/">
        {}
      </a>
      <Contact />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        name
        image
        info
        answer
        tech
        website
        github
      }
    }
  }
`;
