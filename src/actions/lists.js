export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';

let id = 0;
export const addList = (name, board) => {
  return {
    type: ADD_LIST,
    name,
    board,
    id: `list${id++}`
  };
};

export const deleteList = (id, board) => {
  return {
    type: DELETE_LIST,
    board,
    id
  };
};
