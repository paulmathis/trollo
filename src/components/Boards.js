import React from 'react';
import PropTypes from 'prop-types';
import BoardButton from './BoardButton';

const Boards = ({ boards }) => {
  const Boards = boards.ids.map(board => {
    return <BoardButton key={board} title={boards.byId[board].title} />;
  });
  return <div>{Boards}</div>;
};

Boards.propTypes = {};

export default Boards;
