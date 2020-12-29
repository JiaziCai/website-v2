import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import itemStyle from './itemStyle.module.css';
import IconGithub from '../../icons/github';
import IconWebsite from '../../icons/website';
import HoverVideoPlayer from 'react-hover-video-player';
import LazyLoad from 'react-lazy-load';

const Item = ({ name, image, info, answer, website, github, video }) => {
  const wrapperLinkRef = useRef();

  return (
    <div className={itemStyle.root} ref={wrapperLinkRef}>
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
              aria-label="website"
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
              aria-label="github"
              className={itemStyle.social}
              title={`go to ${github}`}
            >
              <IconGithub />
            </a>
          )}
        </div>
        <Link to={website ? `https://${website}` : `https://${github}`}>
          <div className={itemStyle.ProjectCardAction}>
            {video ? (
              <>
                Demo <span>→</span>
              </>
            ) : null}
          </div>
        </Link>
      </div>
      <LazyLoad>
        <div className={itemStyle.imageContainer}>
          {video ? (
            <HoverVideoPlayer
              style={{ position: 'initial' }}
              key={video}
              videoSrc={video}
              pausedOverlay={
                <img
                  src={image}
                  height="100%"
                  width="100%"
                  style={{ borderRadius: '5px' }}
                  alt={`${name}`}
                />
              }
              loadingOverlay={<div className="loading-spinner-overlay" />}
              hoverTargetRef={wrapperLinkRef}
            />
          ) : (
            <>
              <img
                src={image}
                height="100%"
                width="100%"
                alt={`${name}`}
                style={{ borderRadius: '5px' }}
              />
              <div className={itemStyle.details}></div>
            </>
          )}
          <div className={itemStyle.detailDiv}>
            <a
              href={website ? `https://${website}` : `https://${github}`}
              title={`${name}`}
              className={itemStyle.detailLink}
            >
              <button>{website ? 'Website' : 'Github'}</button>
            </a>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  info: PropTypes.string,
  answer: PropTypes.string,
  website: PropTypes.string,
  github: PropTypes.string,
  video: PropTypes.string,
};

export default Item;
