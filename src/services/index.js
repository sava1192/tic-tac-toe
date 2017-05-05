export const getInitialState = (gridSize) => {
  const values = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    values.push('');
  }
  return {
    items: {
      values,
      label: '',
      gridSize,
      isX: false,
    },
  };
};
