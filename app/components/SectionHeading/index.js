import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({ title }) => {
  return (
    <div className="w-full flex items-center gap-3 justify-center my-[5vw]">
      <div className="w-[20vw] h-[1.5px] bg-gray-600 opacity-70 rounded-lg"></div>
      <div className="text-[5vw] font-semibold text-black font-shafarik">
        {title}
      </div>
      <div className="w-[20vw] h-[1.5px] bg-gray-600 opacity-70 rounded-lg"></div>
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeading;
