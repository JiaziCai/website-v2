import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import itemStyle from './itemStyle.module.css';
import IconGithub from '../../icons/github';
import IconWebsite from '../../icons/website';

const Item = ({ name, image, info, answer, website, github }) => (
  <div className={itemStyle.root}>
    <div className={itemStyle.ProjectCardContent}>
      <h1>{name}</h1>
      <div className="css-1206gns eirj6vi4">
        <div>
          <p className={itemStyle.description}>{info}</p>
          <p className={itemStyle.tech}>{answer}</p>
        </div>
      </div>
      <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        {website && (
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noreferrer"
            className={itemStyle.social}
            title={`Go to ${website}`}
          >
            <IconWebsite />
          </a>
        )}
        {github && (
          <a
            href={`https://${github}`}
            target="_blank"
            rel="noreferrer"
            className={itemStyle.social}
            title={`go to ${github}`}
          >
            <IconGithub />
          </a>
        )}
      </div>
      <Link to={website ? `https://${website}` : `https://${github}`}>
        <div className={itemStyle.ProjectCardAction}>
          Details <span>→</span>
        </div>
      </Link>
    </div>
    <div className={itemStyle.imageContainer}>
      <img
        src={image}
        height="100%"
        width="100%"
        alt={`${name}`}
        style={{ borderRadius: '5px' }}
      />
      <div className={itemStyle.details}></div>
      <a
        href={website ? `https://${website}` : `https://${github}`}
        title={`${name}`}
        className={itemStyle.detailLink}
      >
        <div className={itemStyle.detailDiv}>
          <button>{website ? 'Website' : 'Github'}</button>
        </div>
      </a>
    </div>
  </div>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  name: PropTypes.string,
  info: PropTypes.string,
  answer: PropTypes.string,
  website: PropTypes.string,
  github: PropTypes.string,
};

export default Item;
