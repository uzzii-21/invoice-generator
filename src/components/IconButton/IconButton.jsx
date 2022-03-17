import React from 'react';
import propTypes from 'prop-types';

const IconButton = ({ icon, text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center ml-5 rounded-md ring-2 dark:text-primary dark:ring-white text-darkPrimary ring-darkPrimary p-2"
  >
    {icon} {text}
  </button>
);

IconButton.propTypes = {
  icon: propTypes.node.isRequired,
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default IconButton;
