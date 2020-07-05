import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import rootStyle from 'root.module.css';
import IconGithub from '../icons/github';
import IconLinkedin from '../icons/linkedin';
import IconResume from '../icons/resume';
import Pdf from '../document/Resume.pdf';

const Layout = ({ data, children }) => (
  <div>
    <div className={rootStyle.outerDiv}>
      <div className={rootStyle.leftBar}>
        <ul>
          <li style={{ marginTop: '1.25em', marginBottom: '1.25em' }}>
            <a
              href="https://github.com/JiaziCai"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub />
            </a>
          </li>
          <li style={{ marginTop: '1.25em', marginBottom: '1.25em' }}>
            <a
              href="https://www.linkedin.com/in/caijiazi/"
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedin />
            </a>
          </li>
          <li style={{ marginTop: '1.25em', marginBottom: '1.25em' }}>
            <a href={Pdf} target="_blank" rel="noreferrer">
              <IconResume />
            </a>
          </li>
          <li className={rootStyle.line}></li>
        </ul>
      </div>
      <div className={rootStyle.rightBar}>
        <a href="mailto:caijiazi777@gmail.com" className={rootStyle.email}>
          <span>caijiazi777@gmail.com</span>
        </a>
        <div className={rootStyle.line}></div>
      </div>
    </div>
    <div className={rootStyle.rootDiv}>
      <GlobalStyle />
      <Head />
      <Header title={data.site.siteMetadata.siteTitle} />
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
