import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #838c91;
  padding: 6px;
  :hover {
    background-color: #d7d7d7;
    cursor: pointer;
  }
`;

const AddCard = props => {
  return <Wrapper>Add a card...</Wrapper>;
};

AddCard.propTypes = {};

export default AddCard;
