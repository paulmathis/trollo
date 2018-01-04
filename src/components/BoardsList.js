import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Board from './Board';
import CreateBoard from './CreateBoard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const BoardsList = ({ boards, createBoard }) => {
  const Boards = boards.ids.map(board => {
    return <Board key={board} title={boards.byId[board].title} id={board} />;
  });
  return (
    <GridContainer>
      {Boards}
      <CreateBoard onSubmit={createBoard} />
    </GridContainer>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.shape({
    byId: PropTypes.object.isRequired,
    ids: PropTypes.array.isRequired
  }).isRequired,
  createBoard: PropTypes.func.isRequired
};

export default BoardsList;
