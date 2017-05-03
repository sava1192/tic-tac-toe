import React, { PropTypes } from 'react';

const Label = ({ text, onButtonClick }) => {
  if (text) {
    return (
      <div className={'label'} >
        <div>{text}</div>
        <button onClick={() => onButtonClick()}>Try again!</button>
      </div>
    );
  }
  return null;
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Label;
