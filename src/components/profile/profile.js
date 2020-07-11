import React from 'react';

const Profile = () => (
  <section id="about">
    <div className="headTitle">
      <h1 style={{ margin: '2rem' }}>
        <span className="subNumber">01.</span>About
      </h1>
      <h1 className="headLine subLine">{}</h1>
    </div>
    <div className="profileDiv">
      <div className="textArea">
        <p>
          Hello! I&apos;m Jiazi Cai, a software engineer based in Los Angeles,
          CA.
        </p>
        <p>
          I like creating meaningful applications, whether that be websites,
          mobile apps, or anything in between. My goal is build functional,
          interactive, and accessible products that provide pixel-perfect,
          performant experiences.
        </p>
        <p>
          I graduated from{' '}
          <a
            href="https://www.nyu.edu/"
            target="_blank"
            rel="noreferrer"
            className="textLink"
            title="New York University home page"
          >
            New York University
          </a>{' '}
          in May 2020, and have been working over 1 year for{' '}
          <a
            href="https://alive.xprss.org/"
            target="_blank"
            rel="noreferrer"
            className="textLink"
            title="Alive website"
          >
            ALIVE
          </a>{' '}
          as a Front End Engineer. I am starving to learn new skills and to
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
      <div className="profileArea">
        <img
          src="https://res.cloudinary.com/firebeat/image/upload/v1594094304/jiazicai_i4sliw.jpg"
          alt="jiazi"
          className="profileImg"
        />
        <div className="profileImageContainer"></div>
      </div>
    </div>
  </section>
);

export default Profile;
