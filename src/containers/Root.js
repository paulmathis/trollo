// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import BoardHome from './BoardHome';
import Nav from '../components/Nav';

type Props = {
  store: any
};

class Root extends Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <Route path="/" component={Nav} />
            <Route exact path="/" component={Home} />
            <Route path="/:board" component={BoardHome} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Root;
