// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteCard } from '../actions';

const CardStyle = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 7px;
  margin: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  svg {
    color: #999;
    :hover {
      color: #333;
    }
  }
`;

type Props = {
  id: string,
  list: string,
  name: string,
  deleteCard: (id: string, list: string) => void
};

const Card = (props: Props) => {
  const handleClick = () => {
    props.deleteCard(props.id, props.list);
  };
  return (
    <CardStyle>
      {props.name}
      <div onClick={handleClick}>
        <i className="fas fa-times" />
      </div>
    </CardStyle>
  );
};

// Map in delete card dispatch to be used in component
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteCard: (id, list) => {
      dispatch(deleteCard(id, list));
    }
  };
};

export default connect(null, mapDispatchToProps)(Card);
