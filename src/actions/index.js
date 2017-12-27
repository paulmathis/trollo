export const CREATE_BOARD = 'CREATE_BOARD';
export const ADD_LIST = 'ADD_LIST';
export const ADD_CARD = 'ADD_CARD';

let boardId = 0;
export const createBoard = (title, id) => {
  return {
    type: CREATE_BOARD,
    title,
    id: boardId++
  };
};

export const addList = (name, board) => {
  return {
    type: ADD_LIST,
    name,
    board
  };
};

export const addCard = (name, board, list) => {
  return {
    type: ADD_CARD,
    name,
    board,
    list
  };
};
