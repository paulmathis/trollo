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

const Boards = ({ boards, createBoard }) => {
  const Boards = boards.ids.map(board => {
    return <Board key={board} title={boards.byId[board].title} />;
  });
  return (
    <GridContainer>
      {Boards}
      <CreateBoard onSubmit={createBoard} />
    </GridContainer>
  );
};

Boards.propTypes = {};

export default Boards;
