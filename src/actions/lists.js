export const ADD_LIST = 'ADD_LIST';

let id = 0;
export const addList = (name, board) => {
  return {
    type: ADD_LIST,
    name,
    board,
    id: id++
  };
};
