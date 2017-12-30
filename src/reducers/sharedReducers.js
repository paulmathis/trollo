export const deleteItem = (state, action) => {
  const { byId: { [action.id]: deleted, ...byId } } = state;
  const ids = state.ids.filter(id => action.id !== id);
  return {
    byId,
    ids
  };
};
