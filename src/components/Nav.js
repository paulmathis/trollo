import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #026aa7;
  text-align: center;
  font-family: Brush Script MT, Brush Script Std, cursive;

  h2 {
    margin: 0;
  }

  a {
    color: #64b8de;
    text-decoration: none;

    :hover {
      color: #9bcbe0;
    }
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <h2>
        <Link to="/">Trollo</Link>
      </h2>
    </Wrapper>
  );
};

export default Nav;
