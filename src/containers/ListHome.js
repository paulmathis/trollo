import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '../components/List.js';

const mapStateToProps = (state, ownProps) => {
  const filteredCards = state.cards.ids.filter(card => {
    return state.cards.byId[card].list === ownProps.id;
  });

  const cards = filteredCards.map(card => {
    return state.cards.byId[card];
  });
  return {
    cards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {};

const CurrentCards = connect(mapStateToProps)(List);

const ListHome = props => {
  return <CurrentCards {...props} />;
};

ListHome.propTypes = {};

export default ListHome;
