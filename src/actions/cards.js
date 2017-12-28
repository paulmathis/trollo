export const ADD_CARD = 'ADD_CARD';

export const addCard = (name, board, list) => {
  return {
    type: ADD_CARD,
    name,
    board,
    list
  };
};
