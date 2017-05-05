export const TOGGLE_ITEM = 'tic-tac-toe/TOGGLE_ITEM';
export const CLEAR = 'tic-tac-toe/CLEAR';

export const toggleItem = (index) => ({
  type: TOGGLE_ITEM,
  index,
});

export const clear = () => ({
  type: CLEAR,
});

