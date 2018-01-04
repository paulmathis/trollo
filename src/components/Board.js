import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BoardButton from './BoardButton';

const Board = ({ title, id }) => {
  return (
    <div>
      <Link to={id}>
        <BoardButton color="primary">
          <h4>{title}</h4>
        </BoardButton>
      </Link>
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Board;
