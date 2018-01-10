// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #838c91;
  padding: 6px;
  :hover {
    background-color: #d7d7d7;
    cursor: pointer;
  }
`;

const AddCard = () => {
  return <Wrapper>Add a card...</Wrapper>;
};

export default AddCard;
