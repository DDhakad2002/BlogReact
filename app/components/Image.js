import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, className, w }) => {
  return <img src={src} className={className} alt="Image pic" width={w} />;
};

// Add prop-type validation
Image.propTypes = {
  src: PropTypes.string.isRequired, // src should be a string and is required
  className: PropTypes.string, // className should be a string (optional)
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // w can be a string or number (optional)
};

export default Image;
