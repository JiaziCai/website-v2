import React from 'react';

import contactStyle from './contact.module.css';
import IconGithub from '../icons/github';
import IconLinkedin from '../icons/linkedin';
import IconResume from '../icons/resume';
import Pdf from '../document/Resume.pdf';

const Contact = () => (
  <section id="contact" className={contactStyle.contact}>
    <h4 className={contactStyle.title}>
      <span className="subNumber">03.</span>Contact
    </h4>
    <div>
      <p className={contactStyle.body}>
        I am currently looking for new opportunities, and please feel free to
        contact me. Whether you have a question or just want to say hi, I will
        get back to you as soon as possible!
      </p>
    </div>
    <div
      className="emailContainer"
      style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <a
        href="mailto:caijiazi777@gmail.com"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={contactStyle.email}
      >
        <span>Say Hello</span>
      </a>
    </div>
    <div style={{ height: '30vh' }} />
    <ul className={contactStyle.socialDiv}>
      <li>
        <a href="https://github.com/JiaziCai" target="_blank" rel="noreferrer">
          <IconGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/caijiazi/"
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedin />
        </a>
      </li>
      <li>
        <a href={Pdf} target="_blank" rel="noreferrer">
          <IconResume />
        </a>
      </li>
    </ul>
    <div className={contactStyle.footer}>
      <a href="https://github.com/JiaziCai/website-v2">Website by Jiazi Cai</a>
    </div>
  </section>
);

export default Contact;
