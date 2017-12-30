export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

let id = 0;
export const addCard = (name, list) => {
  return {
    type: ADD_CARD,
    name,
    list,
    id: `card${id++}`
  };
};

export const deleteCard = (id, list) => {
  return {
    type: DELETE_CARD,
    list,
    id
  };
};
