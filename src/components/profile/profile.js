import React from 'react';
import LazyLoad from 'react-lazy-load';

const skillArr = [
  'JavaScript (ES6+)',
  'HTML & CSS',
  'React',
  'React Native',
  'TypeScript',
  'GraphQL',
  'Git',
  'Docker',
  'Kubernetes',
];

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
          mobile apps, or anything in between. My goal is to build functional,
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
            aria-label="New York University"
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
            aria-label="Alive website"
          >
            ALIVE
          </a>{' '}
          as a Front End Engineer. Currently I am working at{' '}
          <a
            href="https://crowdsynctechnology.com/"
            target="_blank"
            rel="noreferrer"
            className="textLink"
            title="CrowdSync website"
            aria-label="CrowdSync website"
          >
            CrowdSync Technology
          </a>{' '}
          in building a health management platform. I learn new skills and
          contribute to side projects daily.
        </p>
        <p>Here are a few technologies I&apos;ve been working on recently:</p>
        <ul className="techList">
          {skillArr.map((skill, index) => {
            return (
              <li key={`${index}${skill}`}>
                <span>→</span>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="profileArea">
        <LazyLoad>
          <img
            src="https://res.cloudinary.com/firebeat/image/upload/v1594094304/jiazicai_i4sliw.jpg"
            alt="jiazi"
            className="profileImg"
          />
        </LazyLoad>
        <div className="profileImageContainer"></div>
      </div>
    </div>
  </section>
);

export default Profile;
