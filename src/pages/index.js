import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Contact from 'components/contact';
import Profile from 'components/profile';
import { graphql } from 'gatsby';
import './index.css';

const Index = ({ data }) => {
  return (
    <Layout>
      <Box>
        <div style={{ height: '10vh' }}></div>
        <div
          style={{ fontWeight: '300', fontSize: '1.4em', marginBottom: '3rem' }}
        >
          Hello!
          <div
            className="rotating"
            style={{
              width: '250px',
              textAlign: 'center',
            }}
          >
            <span role="img" aria-label="emoji" style={{ fontSize: '2.4em' }}>
              🤹🏻
            </span>
          </div>
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
      <Profile />
      <div style={{ height: '30vh' }}></div>
      <Gallery items={data.homeJson.gallery} />
      <div style={{ height: '20vh' }} />
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
        video
      }
    }
  }
`;
