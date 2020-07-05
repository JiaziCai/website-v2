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
        <h6>Spotify Data Viz</h6>
        <h3>#UI/UX</h3>
        <div className="css-1206gns eirj6vi4">
          <div>
            <p className={itemStyle.description}>
              Get user profile and playlist, recommend songs based on user
              preference
            </p>
            <p className={itemStyle.tech}>React.js Node.js Chart.js Sass</p>
          </div>
        </div>
        <div className={itemStyle.ProjectCardAction}>
          Details <span>→</span>
        </div>
      </div>
      <div className={itemStyle.imageContainer}>
        <img
          src="https://res.cloudinary.com/firebeat/image/upload/v1591814108/lf_bltqhw.jpg"
          height="316px"
          width="400px"
          alt="abc"
        />
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
