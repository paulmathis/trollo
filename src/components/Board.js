// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBoard } from '../actions';
import BoardButton from './BoardButton';

type Props = {
  title: string,
  id: string,
  deleteBoard: (board: string) => void
};

const Board = ({ title, id, deleteBoard }: Props) => {
  function handleClick(e) {
    e.preventDefault();
    deleteBoard(id);
  }
  return (
    <div>
      <Link to={id}>
        <BoardButton color="primary">
          <h4>{title}</h4>
          <div onClick={handleClick}>
            <i className="far fa-times-circle" />
          </div>
        </BoardButton>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteBoard: board => {
      dispatch(deleteBoard(board));
    }
  };
};

const BoardExport = connect(null, mapDispatchToProps)(Board);

export default BoardExport;
