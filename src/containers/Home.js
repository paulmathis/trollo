import React from 'react';
import { connect } from 'react-redux';
import Boards from '../components/Boards';
import { createBoard } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    boards: state.boards
  };
};

const mapDispacthToProps = (dispatch, ownProps) => {
  return {
    createBoard: title => {
      dispatch(createBoard(title));
    }
  };
};

const CurrentBoards = connect(mapStateToProps, mapDispacthToProps)(Boards);

const Home = props => {
  return (
    <div>
      <CurrentBoards />
    </div>
  );
};

Home.propTypes = {};

export default Home;
