import { TOGGLE_ITEM, CLEAR } from '../actions';
// TODO: concider refactoring this reducer
// looks like 'item' and 'items' are not pure functions
// so probably initialization of 'defaultItems', 'isX' checking and
// magic with 'getLabelFromItems' should be moved to action creators.
const defaultItems = [];
for (let i = 0; i < 9; i++) {
  defaultItems.push('');
}

let isX = false;

const item = (state = '', action) => {
  switch (action.type) {
    case TOGGLE_ITEM:
      isX = !isX;
      return isX ? 'X' : 'O';
    default:
      return state;
  }
};

export const getLabelFromItems = (items) => {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let current;
  if (wins.some(win => {
    current = items[win[0]];
    return items[win[0]] &&
      (items[win[0]] === items[win[1]]) &&
      (items[win[0]] === items[win[2]]);
  })) {
    return `${current} WIN!`;
  }
  if (items.every(fieldItem => fieldItem)) {
    return 'Draw.';
  }
  return '';
};

const items = (state = defaultItems, action) => {
  const fieldItems = state.slice();

  switch (action.type) {
    case TOGGLE_ITEM:
      if (!fieldItems[action.index] && !getLabelFromItems(fieldItems)) {
        fieldItems[action.index] = item(fieldItems[action.index], action);
      }
      return fieldItems;
    case CLEAR:
      return defaultItems;
    default:
      return state;
  }
};

export default items;
