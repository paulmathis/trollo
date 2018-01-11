// @flow

import styled from 'styled-components';
import { Button } from 'reactstrap';

const BoardButton = styled(Button)`
  width: 100%;
  height: 100px;
  background-color: rgb(0, 121, 191);
  position: relative;
  svg {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 1.5em;

    :hover {
      color: #00b6ff;
    }
  }
`;

export default BoardButton;
