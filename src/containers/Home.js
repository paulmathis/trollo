import React from 'react';
import { connect } from 'react-redux';
import Boards from '../components/Boards';

const mapStateToProps = (state, ownProps) => {
  return {
    boards: state.boards
  };
};

const CurrentBoards = connect(mapStateToProps)(Boards);

const Home = props => {
  return (
    <div>
      <CurrentBoards />
    </div>
  );
};

Home.propTypes = {};

export default Home;
