import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const BoardButton = ({ title }) => {
  return <Button>{title}</Button>;
};

BoardButton.propTypes = {};

export default BoardButton;
