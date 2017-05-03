export const TOGGLE_ITEM = 'tic-tac-toe/TOGGLE_ITEM';
export const CLEAR = 'tic-tac-toe/CLEAR';
export const SET_LABEL = 'tic-tac-toe/SET_LABEL';

export const toggleItem = (index) => ({
  type: TOGGLE_ITEM,
  index,
});

export const clear = () => ({
  type: CLEAR,
});

export const setLabel = () => ({
  type: SET_LABEL,
});
