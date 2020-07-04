import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import itemStyle from './itemStyle.module.css';
import { Link } from 'gatsby';

const Item = ({ title, copy, image }) => (
  <Link to="/about">
    <div className={itemStyle.root}>
      <div className={itemStyle.ProjectCardContent}>
        <h6>Web Design</h6>
        <h3>Portfolio Site</h3>
        <div className="css-1206gns eirj6vi4">
          <div>
            <p className={itemStyle.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod
              tempor.
            </p>
          </div>
        </div>
        <div className={itemStyle.ProjectCardAction}>
          Details <span>→</span>
        </div>
      </div>
      <div className={itemStyle.imageContainer}>
        <figure>
          <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
          <figcaption>
            <Title>{title}</Title>
            <Copy>{copy}</Copy>
          </figcaption>
        </figure>
      </div>
    </div>
  </Link>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
