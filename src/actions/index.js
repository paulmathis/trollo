export const CREATE_BOARD = 'CREATE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

let boardId = 1;
export const createBoard = title => {
  return {
    type: CREATE_BOARD,
    title,
    id: `board${boardId++}`
  };
};

export const deleteBoard = id => {
  return {
    type: DELETE_BOARD,
    id
  };
};

export const ADD_LIST = 'ADD_LIST';

let listId = 1;
export const addList = (name, board) => {
  return {
    type: ADD_LIST,
    name,
    board
  };
};

export const ADD_CARD = 'ADD_CARD';

export const addCard = (name, board, list) => {
  return {
    type: ADD_CARD,
    name,
    board,
    list
  };
};
