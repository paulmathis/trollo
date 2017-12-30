export const CREATE_BOARD = 'CREATE_BOARD';
export const CLOSE_BOARD = 'CLOSE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

let id = 0;
export const createBoard = title => {
  return {
    type: CREATE_BOARD,
    title,
    id: `board${id++}`
  };
};

export const closeBoard = id => {
  return {
    type: CLOSE_BOARD,
    id
  };
};

export const deleteBoard = id => {
  return {
    type: DELETE_BOARD,
    id
  };
};
