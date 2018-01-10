// @flow

import React from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import type Props from '../components/List';

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

// const mapDispatchToProps = (dispatch, ownProps) => {};

const CurrentCards = connect(mapStateToProps)(List);

const ListHome = (props: Props) => {
  return <CurrentCards {...props} />;
};

ListHome.propTypes = {};

export default ListHome;
