import React, { PropTypes } from 'react';
import Item from './item';

const Field = ({ items, onItemClick, isClickable }) => (
  <div className={'field'}>
    {items.map((item, i) => (
      <Item
        value={item}
        key={i}
        onClick={() => isClickable && onItemClick(i)}
      />
    ))}
  </div>
);

Field.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemClick: PropTypes.func.isRequired,
  isClickable: PropTypes.bool.isRequired,
};

export default Field;
