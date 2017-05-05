import { TOGGLE_ITEM, CLEAR } from '../actions';

const getLabelFromItems = (items, gridSize) => {
  // lines
  for (let i = 0; i < gridSize; i++) {
    const row = items.slice(i * gridSize, i * gridSize + gridSize);
    if (row.every(rowItem => row[0] && rowItem === row[0])) {
      return `${row[0]} WINS`;
    }
  }
  // columns
  for (let i = 0; i < gridSize; i++) {
    let win = true;
    for (let j = 0; j < gridSize; j++) {
      if (!items[i] || items[i] !== items[j * gridSize + i]) {
        win = false;
        break;
      }
    }
    if (win) {
      return `${items[i]} WINS`;
    }
  }
  // '\'
  for (let i = 0; i < gridSize; i++) {
    if (!items[0] || items[i * gridSize + i] !== items[0]) {
      break;
    } else if (i === gridSize - 1) {
      return `${items[0]} WINS`;
    }
  }
  // '/'
  for (let i = gridSize; i > 0; i--) {
    const first = items[gridSize - 1];
    if (!first || items[(gridSize - i) * gridSize + i - 1] !== first) {
      break;
    } else if (i === 1) {
      return `${first} WINS`;
    }
  }
  // Draw
  if (items.every(fieldItem => fieldItem)) {
    return 'Draw.';
  }

  return '';
};

const items = (state = {}, action) => {
  const values = state.values && state.values.slice();
  let label = state.label;

  switch (action.type) {
    case TOGGLE_ITEM:
      label = getLabelFromItems(values, state.gridSize);
      if (!values[action.index] && !label) {
        values[action.index] = state.isX ? 'X' : 'O';
        label = getLabelFromItems(values, state.gridSize);
      }
      return {
        ...state,
        values,
        label,
        isX: !state.isX,
      };
    case CLEAR:
      return {
        ...state,
        values: values.map(() => ''),
        label: '',
        isX: true,
      };
    default:
      return state;
  }
};

export default items;
