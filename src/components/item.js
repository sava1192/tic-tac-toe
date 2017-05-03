import React, { PropTypes } from 'react';

const Item = ({ value, onClick }) => (
  <div onClick={onClick} className={'item'}>
    {value}
  </div>
);

Item.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;

