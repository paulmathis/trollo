export const ADD_LIST = 'ADD_LIST';

let listId = 1;
export const addList = (name, board) => {
  return {
    type: ADD_LIST,
    name,
    board
  };
};
