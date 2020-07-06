import React from 'react';

import contactStyle from './contact.module.css';
import IconGithub from '../icons/github';
import IconLinkedin from '../icons/linkedin';
import IconResume from '../icons/resume';
import Pdf from '../document/Resume.pdf';

const Profile = () => (
  <section id="about" className={contactStyle.contact}>
    <div className="headTitle">
      <h1 style={{ margin: '2rem' }}>
        <span className="subNumber">01.</span>About
      </h1>
      <h1 className="headLine subLine">{}</h1>
    </div>
    <div className="textArea">
      <p className={contactStyle.body}>
        Hello! I&apos;m Jiazi Cai, a software engineer based in Los Angeles, CA.
      </p>
      <p>
        I like creating meaningful applications, whether that be websites,
        mobile apps, or anything in between. My goal is build functional,
        interactive, and accessible products that provide pixel-perfect,
        performant experiences.
      </p>
      <p>
        I graudated from{' '}
        <a
          href="https://www.nyu.edu/"
          target="_blank"
          rel="noreferrer"
          className="textLink"
        >
          New York University
        </a>{' '}
        in May 2020, and have been working over 1 year for{' '}
        <a
          href="https://alive.xprss.org/"
          target="_blank"
          rel="noreferrer"
          className="textLink"
        >
          ALIVE
        </a>{' '}
        as an Front End Engineer. I am starving to learn new skills and to
        create side projects on a daily basis.
      </p>
      <p>Here are a few technologies I&apos;ve been working on recently:</p>
      <ul className="techList">
        <li>
          <span>→</span> JavaScript (ES6+)
        </li>
        <li>
          <span>→</span> HTML & CSS
        </li>
        <li>
          <span>→</span> React
        </li>
        <li>
          <span>→</span> Node.js
        </li>
        <li>
          <span>→</span> React Native
        </li>
        <li>
          <span>→</span> TypeScript
        </li>
        <li>
          <span>→</span> GraphQL
        </li>
        <li>
          <span>→</span> Git
        </li>
      </ul>
    </div>
  </section>
);

export default Profile;
