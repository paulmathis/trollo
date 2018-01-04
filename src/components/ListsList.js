import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListHome from '../containers/ListHome';

const ListContainer = styled.div`
  display: flex;
`;

const ListsList = ({ lists }) => {
  const Lists = lists.map(list => {
    return <ListHome key={list.id} name={list.name} id={list.id} cards={list.cards} />;
  });
  return <ListContainer>{Lists}</ListContainer>;
};

ListsList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      board: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ListsList;
