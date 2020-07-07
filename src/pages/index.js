import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
// import Modal from 'containers/modal';
import Contact from 'components/contact';
import Profile from 'components/profile';
import { graphql, Link } from 'gatsby';
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
        <div style={{ height: '10vh' }}></div>
        <div
          style={{ fontWeight: '300', fontSize: '1.4em', marginBottom: '3rem' }}
        >
          Hello!&nbsp;
          <span role="img" aria-label="emoji" style={{ fontSize: '1.4em' }}>
            🤹🏻
          </span>
        </div>
        <Title as="h2" size="large">
          {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
        </Title>
        <div className="introSub">I create things for the web.</div>
        <div className="introDetail">
          I&apos;m a software engineer based in Los Angeles, CA specializing in
          building (and sometimes designing) amazing websites, mobile apps, and
          everything in between.
        </div>

        {/* <Modal>
          <video
            src="https://i.imgur.com/gzFqNSW.mp4"
            playsInline
            loop
            autoPlay
            muted
          />
        </Modal> */}
        <div className="emailContainer">
          <a
            href="mailto:caijiazi777@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="email"
            title="email to"
          >
            <span>Say Hello</span>
          </a>
        </div>
      </Box>
      <div style={{ height: '30vh' }}></div>
      <Link name="about" to="/" title="Go to about section">
        {}
      </Link>
      <Profile />
      <div style={{ height: '30vh' }}></div>
      <Link name="work" to="/" title="Go to work section">
        {}
      </Link>
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
              onClick={() => setCard(name)}
            >
              {name}
            </button>
          </p>
        ))}
      </div>
      <Gallery items={data.homeJson.gallery} card={card} />
      <div style={{ height: '20vh' }} />
      <Link name="contact" to="/" title="Go to contact">
        {}
      </Link>
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
