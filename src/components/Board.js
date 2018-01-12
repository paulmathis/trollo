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
    //Prevent default of opening the board from click of the button
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

// Map in delete board dispatch to be used in component
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteBoard: board => {
      dispatch(deleteBoard(board));
    }
  };
};

export default connect(null, mapDispatchToProps)(Board);
